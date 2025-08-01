import {Link} from "react-router-dom";
import footerLogo from "../assets/res/logo_vulkanland.png";
import color_facebook_logo from "../assets/icons/color_facebook-icon.png";
import color_instagram_logo from "../assets/icons/color_instagram-icon.png";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Kontakt */}
                <div className="footer-section">
                    <h3>Kontakt</h3>
                    <p>Bäckerei Strohmaier</p>
                    <p>Grazerstraße 3</p>
                    <p>8083 St. Stefan im Rosental</p>
                    <p>Email: baeckerei@strohmaierkg.at</p>
                    <p>Telefon: 03116 8283</p>
                </div>

                {/* Filialen */}
                <div className="footer-section">
                    <h3>Filiale</h3>
                    <p>Filiale St. Stefan im Rosental<br/>8083 St. Stefan im Rosental, Grazerstraße 3</p>
                    <p>Tel.: 03116 8283</p>
                </div>

                {/* Links & Rechtliches */}
                <div className="footer-section">
                    <img src={footerLogo} alt="Footer Logo" className="footer-logo"/>

                    <h3>Rechtliches</h3>
                    <Link id={"footer-links"} to="/impressum">Impressum</Link><br/>
                    <Link id={"footer-links"} to="/datenschutz">Datenschutz</Link><br/>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
                <a href="https://www.facebook.com/kurt.strohmaier.144" target="_blank" rel="noopener noreferrer">
                    <img src={color_facebook_logo} className="social-icon"/>
                </a>
                <a href="https://www.instagram.com/kurt.strohmaier.144/" target="_blank" rel="noopener noreferrer">
                    <img src={color_instagram_logo} className="social-icon"/>
                </a>
            </div>
        </footer>
    );
};

