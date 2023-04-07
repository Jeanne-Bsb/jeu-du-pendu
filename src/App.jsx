import { Clavier } from './components/clavier/Clavier';
import {Lettre} from './components/lettres/Lettre';
import { Word } from './components/Word/Word';
import { useEffect, useState } from 'react';
import {Pendu} from './components/pendu/Pendu';

function App() {
	const word = "michelle"
	const Partie = {
		mot : word.toUpperCase().split("").map(cara => {
			return cara = {lettre : cara , hidden : true};
		}),
		nbVie : 9,
		clavier : "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").map(cara => {
			return cara = {lettre : cara , disable : false};
		}),
		selectLettres : [],
		endgame : ""
	}

	const [game, setGame] = useState(Partie)

	const isInWord = (lettre) => {
		let presente = false;
		let lettrekey = [];
		game.mot.map((cara,index) => {
			if(cara.lettre == lettre) {
				presente = true
				lettrekey.push(index)
			}
		})
		return [presente,lettrekey]
    };

	const Win = () => {
		let i = 0
		game.mot.map(cara => {
			if(cara.hidden == false) {
				i ++;
			}
		})
		if(i == game.mot.length) {
			return true
		} else {
			return false
		}
	}

	const Lose = () => {
		if (game.nbVie <= 0) {
			return true
		} else {
			return false
		}
	}

	const EndGame = () => {
		game.clavier.map(cara => {
			cara.disable = false;
		})
		game.mot.map(cara => {
			cara.hidden = false;
		})
	}
	const selectLettre = (key) => {
		game.clavier[key].disable = true;
		if(isInWord(game.clavier[key].lettre)[0]) {
			isInWord(game.clavier[key].lettre)[1].map(index => {
				game.mot[index].hidden = false;
			})
			if(Win()) {
				game.endgame = "Gagné";
				EndGame();
			}
		} else {
			game.selectLettres.push(game.clavier[key].lettre);
			game.nbVie --;
			if(Lose()) {
				game.endgame = "Perdu";
				EndGame();
			}
		}
		setGame({...game})
    }

	return (
		<div>
			<h1>Jeu du pendu</h1>
			<h2>{game.endgame}</h2>
			<Word>{game.mot}</Word>
			<div>
				{game.selectLettres.map((lettre) =>{
					return(<p>{lettre}</p>)
				})}
			</div>
			<Pendu step={game.nbVie}></Pendu>
			<Clavier tableau={game.clavier} onClick={selectLettre}></Clavier>
		</div>
	);
	};

export default App;
