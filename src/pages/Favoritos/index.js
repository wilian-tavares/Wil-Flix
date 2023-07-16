import './favoritos.scss';

import { useEffect, useState } from 'react';
import CardFavoritos from '../../components/CardFavoritos';


export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
         function loadFilmes(){
            const favoritos = localStorage.getItem('@wilFlix');
            setFilmes(JSON.parse(favoritos) || [])
        }

        loadFilmes()
    }, [])


    function RemoverFlme(id){
        let filtrofilmes = filmes.filter((filme) => {
            return (
                filme.id !== id
            )
        })   
        setFilmes(filtrofilmes)

        localStorage.setItem("@wilFlix", JSON.stringify(filtrofilmes))
    }
   

    return(
        <div className='container-favoritos'>
            <h1>Favoritos</h1>
           
     
            
            <div className='container-favoritos-filmes'>
            {
                filmes.length === 0 && <span className='span-vazio'>A Lista está Vazia... Adicione algum filme...</span>

            }
            {
                filmes.map((filme) => {
                    return(
                        <CardFavoritos  CardFilme key={filme.id}
                                titulo={filme.title}
                                imagem={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`   }
                                detalhes={`/filme/${filme.id}`}
                               remover={() => RemoverFlme(filme.id)}
                            
                            />
                            
                    )
                    
                })
            }


            </div>
        </div>
    )
}