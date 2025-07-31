import { Link, useLocation } from 'react-router-dom';
import logo_top from "../assets/res/logo_top.jpg";

export const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo_top} height={75} alt="Logo" />
                </Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/" className={isActive("/") ? "active" : ""}>Home</Link></li>
                <li><Link to="/about" className={isActive("/about") ? "active" : ""}>Über uns</Link></li>
                <li><Link to="/products" className={isActive("/products") ? "active" : ""}>Produkte</Link></li>
                <li><Link to="/cafe" className={isActive("/cafe") ? "active" : ""}>Café</Link></li>
                <li><Link to="/location" className={isActive("/location") ? "active" : ""}>Standort</Link></li>
                <li><Link to="/offnungszeiten" className={isActive("/offnungszeiten") ? "active" : ""}>Öffnungszeiten</Link></li>
            </ul>
        </nav>
    );
};
