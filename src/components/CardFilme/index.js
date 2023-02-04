import './cardFilme.scss';
import { Link } from 'react-router-dom';

export default function CardFilme(props){
    return(
        <div className="container-card">
            <h2>{props.titulo}</h2>
            <img src={props.imagem} alt={props.titulo}/>
            <p>{props.descricao}</p>
             <span>{props.data}</span> 
             <Link to={props.detalhes}>Detalhes</Link>

        </div>
    )
}