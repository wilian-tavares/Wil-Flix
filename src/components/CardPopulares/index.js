import './CardPopulares.scss'

export default function CardPopulares(props){
    return(
        <div className="container-cardPopular">
            <h2>{props.titulo}</h2>
            <img src={props.imagem} alt={props.titulo}/>
            <p>{props.descricao}</p>
            {/* <span></span> */}
            
            <button >
                <a href={props.detalhes} >Detalhes</a>
                </button>
        </div>
    )
}