import { Link } from "react-router-dom";
import api from '../../Services/api';
import { useEffect, useState } from "react";
import CardFilme from "../../components/CardFilme";

export default function Cinema() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){
             const response = await api.get('/movie/now_playing',{
                params: {
                    language: 'pt-br',
                    api_key: process.env.REACT_APP_KEY_API,
                    region: 'BR'
                }
                
            })
            .then((response) => {
                setFilmes(response.data.results)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: '+ error)
            })
        }

        loadFilmes()
    
    },[])

 
    return(
        <div>
            <h1>em Cartaz nos cinemas</h1>
            
            {
                filmes.map((filme) => {
                    return(  
                        <CardFilme  CardFilme key={filme.id}
                            titulo={filme.title}
                            imagem={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`   }
                            descricao={filme.overview}
                            // detalhes={`/filme/${filme.id}`}
                            detalhes={`/filme/${filme.id}`}
                        />
                        
                    )
                })
                
            }

        </div>
    )
}