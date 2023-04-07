import {Lettre} from '../lettres/Lettre.jsx'
import './Word.css';

export const Word = ({children}) => {
    return (
        <div className='word'>
            {children.map(lettre =>{
                return(<Lettre hidden={lettre.hidden} disable>{lettre}</Lettre>)
            })}
        </div>
    )
};