import {Link} from 'react-router-dom';
import baecker_logo from '../assets/res/baecker_logo.png'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <img id={"baecker_logo"} src={baecker_logo} height={75}/>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Produkte</Link></li>
                <li><Link to="/about">Über uns</Link></li>
                <li><Link to="/cafe">Café</Link></li>
                <li><Link to="/work">Workflow</Link></li>
                <li><Link to="/offnungszeiten">Öffnungszeiten</Link></li>
            </ul>
        </nav>
    );
};