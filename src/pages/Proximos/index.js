import { Link } from "react-router-dom";
import api from '../../Services/api';
import { useEffect, useState } from "react";
import CardFilme from "../../components/CardFilme";

export default function Proximos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = api.get('/movie/upcoming',{
                params: {
                    language: 'pt-br',
                    api_key: process.env.REACT_APP_KEY_API,
                    region: 'br'
                }
            })
            .then((response) => {
                setFilmes(response.data.results)
            })
            .catch((error) => {
                console.log('Ocorre um Erro: ' + error)
            })
        }

        loadFilmes()
    
    },[])


 
    return(
        <div className="container-proximos">
            <h1>Proximos</h1>
            
        <div className="container-proximos-filmes">
            {
                
                filmes.map((filme) => {
                    let dataAtualizada = filme.release_date.split('-').reverse().join('/');                    
                   
                    return(  
                        <CardFilme  CardFilme key={filme.id}
                            titulo={filme.title}
                            imagem={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`   }
                            descricao={filme.overview}
                            detalhes={`/filme/${filme.id}`}
                            data={`Estreia: ${dataAtualizada}`}
                        />
                        
                    )
                })
            }

        </div>

        </div>
    )
}