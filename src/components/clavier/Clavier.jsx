import {Lettre} from '../lettres/Lettre.jsx'
import './Clavier.css'

export const Clavier = ({tableau,onClick}) =>{
    return(
        <div className='clavier'>
            {tableau.map((lettre,index) =>{
                return(<Lettre click disable={lettre.disable} onClick={onClick} nb={index}>{lettre}</Lettre>)
            })}
        </div>
    )
}