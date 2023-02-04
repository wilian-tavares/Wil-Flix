import './favoritos.scss';

import { useEffect, useState } from 'react';
import CardPopulares from '../../components/CardPopulares';


export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
         function loadFilmes(){
            const favoritos = localStorage.getItem('@wilFlix');
            setFilmes(JSON.parse(favoritos) || [])
        }

        loadFilmes()
    }, [])


    return(
        <div className='container-favoritos'>
            <h1>Favoritos</h1>
            
            <div className='container-favoritos-filmes'>
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