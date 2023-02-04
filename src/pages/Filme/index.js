import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Services/api";
import CardFilme from "../../components/CardFilme";
import { Link } from "react-router-dom";

import './filme.scss'

export default function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`/movie/${id}` , {
                params: {
                    language: 'pt-br',
                    api_key: process.env.REACT_APP_KEY_API,
                    region: 'BR'
                }
            })
            .then((response) => {
                setFilme(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            })
        }

        loadFilme()
    }, [])

  
    function favoritar(){
        const minhaLista = localStorage.getItem("@wilFlix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvos) => filmeSalvos.id === filme.id)

        if(hasFilme) {
            alert('Filme já Adicionado!')
            return;
        }


        filmesSalvos.push(filme)
        localStorage.setItem("@wilFlix", JSON.stringify(filmesSalvos))
        alert('FILME SALVO COM SUCESSO')
      

         }

  
    return(
        <div className="container-filme">
            <h1>Detalhes do Filme</h1>

            <div className="container-filme-card">
                <h2>{filme.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.titulo}/>
                <p>{filme.overview}</p>
                <span>Nota: {Math.ceil(filme.vote_average)} / 10</span> 
                
                <div className="botoes">
                    <button onClick={favoritar} className="button-favorito">Favoritar</button>
                    
                    <button className="trailler">
                        <a href={`https://www.youtube.com/results?search_query=${filme.title}`} target='_blank'>Trailler</a>
                    </button>
                </div>
               
             </div>
        </div>
    )
}