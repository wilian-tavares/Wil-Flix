import Home from '../src/pages/Home';
import  Cinema from '../src/pages/Cinema';
import  Proximos from '../src/pages/Proximos';
import  Filme from '../src/pages/Filme';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

export default function RoutesApp(){
    return(

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='Cinema' element={ <Cinema /> } />
                <Route path='/Proximos' element={< Proximos />} />
                <Route path={`/filme/:id`} element={< Filme />} />
                <Route path={'/favoritos'} element={ <Favoritos/>} />
                
                <Route path={'*'} element={ <Erro/> }/>

            </Routes>
        
        </BrowserRouter>
    )

}