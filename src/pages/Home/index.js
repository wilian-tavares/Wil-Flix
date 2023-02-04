import { Link } from "react-router-dom";
import api from '../../Services/api';
import { useEffect, useState } from "react";
import './home.scss';
import CardPopulares from "../../components/CardPopulares";

export default function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){
                 const response = await api.get('/trending/movie/week', {
                params: {
                    language: 'pt-br',
                    api_key: process.env.REACT_APP_KEY_API,
                    region: 'BR'
                
                }
            })
            .then((response) => {
                setFilmes(response.data.results)
                // console.log(response.data.results)

            })
            .catch((error) => {
                console.log(error)
            })
        }

        loadFilmes()
    
    },[])

 
    return(
        <div className="container-home">
            <h1>Wil-Flix</h1>
            <span>Seu Site de Filmes</span>
           
            
                <h2 className="info">Populares da Semana</h2>
               

            <div className="container-conteudo-home">
                
            {
                filmes.map((filme) => {
                    return(  
                        <CardPopulares  CardFilme key={filme.id}
                            titulo={filme.title}
                            imagem={`https://image.tmdb.org/t/p/original/${filme.poster_path}`   }
                            // descricao={filme.overview}
                            detalhes={`/filme/${filme.id}`}
                        />
                        
                    )
                })
                
            }
            </div>
            

        </div>
    )
}