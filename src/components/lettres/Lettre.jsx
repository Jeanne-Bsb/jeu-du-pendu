import './Lettre.css';

export const Lettre = ({children,disable,click,hidden,onClick,nb}) => {
    const className= `${disable ? 'used':''} ${hidden ? 'cache' : ''} ${click ? 'click' : ''}`;
    const content = `${hidden ? '__':children.lettre}`

    return (
        <p className={content + " " + className} onClick={()=>onClick(nb)}>{content}</p>
    )
};