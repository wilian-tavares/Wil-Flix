import './header.scss';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className="header">
            <div className="logo"></div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Cinema'>Cinemas</Link>
                    </li>
                    <li>
                        <Link to='/proximos'>Próximos</Link>
                    </li>
                    <li>
                        <Link to='/favoritos'>Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}