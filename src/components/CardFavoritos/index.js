
export default function CardFavoritos(props){
    return(
        <div className="container-cardPopular">
            <h2>{props.titulo}</h2>
            <img src={props.imagem} alt={props.titulo}/>
            <p>{props.descricao}</p>
            
            <button className='detalhes'>
                <a href={props.detalhes} >Detalhes</a>
            </button>

            <button className='remover' onClick={props.remover}>Remover</button>
        </div>
    )
}