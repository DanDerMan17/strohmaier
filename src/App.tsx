import {Navbar} from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import {Products} from "./pages/Products.tsx";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {Cafe} from "./pages/Cafe.tsx";
import {Location} from "./pages/Location.tsx";
import {OpeningHours} from "./pages/OpeningHours.tsx";
import facebook_logo from "./assets/icons/facebook-icon.png";
import instagram_logo from "./assets/icons/instagram-icon.png";
import {Footer} from "./components/Footer.tsx";

function App() {

    return (
        <>

            <div id="top-bar-wrap">
                <div id="top-bar">
                    <div id="top-bar-inner">

                        <span className="topbar-content">baeckerei@strohmaierkg.at | 03357 42290</span>

                        <div id="top-bar-social">
                            <a href="https://www.facebook.com/kurt.strohmaier.144" target="_blank" rel="noopener noreferrer">
                                <img src={facebook_logo} className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/kurt.strohmaier.144/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram_logo} className="social-icon" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <hr></hr>

            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/cafe" element={<Cafe/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/offnungszeiten" element={<OpeningHours/>}/>

            </Routes>

            <Footer></Footer>
        </>
    )
}

export default App
