import {Link} from 'react-router-dom';
import logo_top from "../assets/res/logo_top.jpg";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo_top} height={75} />
                </Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Über uns</Link></li>
                <li><Link to="/products">Produkte</Link></li>
                <li><Link to="/cafe">Café</Link></li>
                <li><Link to="/location">Standort</Link></li>
                <li><Link to="/offnungszeiten">Öffnungszeiten</Link></li>
            </ul>
        </nav>
    );
};