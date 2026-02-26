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
                    <p>Email: <a href="mailto:baeckerei@strohmaierkg.at">baeckerei@strohmaierkg.at</a></p>
                    <p>Telefon: <a href="tel:+4331168283">03116 8283</a></p>
                </div>

                {/* Filialen */}
                <div className="footer-section">
                    <h3>Filiale</h3>
                    <p>Filiale St. Stefan im Rosental<br/>8083 St. Stefan im Rosental, Grazerstraße 3</p>
                    <p>Tel.: <a href="tel:+4331168283">03116 8283</a></p>
                </div>

                {/* Links & Rechtliches */}
                <div className="footer-section">
                    <img loading="lazy" src={footerLogo} alt="Vulkanland Logo" width={150} height={150} className="footer-logo"/>

                    <Link id={"footer-links"} to="/impressum">Impressum</Link><br/>
                    <Link id={"footer-links"} to="/datenschutz">Datenschutz</Link><br/>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
                <a href="https://www.facebook.com/kurt.strohmaier.144" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img loading="lazy" src={color_facebook_logo} alt="Facebook" width={32} height={32} className="social-icon"/>
                </a>
                <a href="https://www.instagram.com/kurt.strohmaier.144/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img loading="lazy" src={color_instagram_logo} alt="Instagram" width={32} height={32} className="social-icon"/>
                </a>
            </div>
        </footer>
    );
};