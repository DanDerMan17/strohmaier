import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Produkte</Link></li>
                <li><Link to="/about">Über uns</Link></li>
            </ul>
        </nav>
    );
};