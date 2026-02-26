import {Navbar} from "./components/Navbar.tsx";
import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import facebook_logo from "./assets/icons/facebook-icon.png";
import instagram_logo from "./assets/icons/instagram-icon.png";
import {Footer} from "./components/Footer.tsx";

const Home = lazy(() => import("./pages/Home.tsx").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About.tsx").then(m => ({ default: m.About })));
const Products = lazy(() => import("./pages/Products.tsx").then(m => ({ default: m.Products })));
const Cafe = lazy(() => import("./pages/Cafe.tsx").then(m => ({ default: m.Cafe })));
const Location = lazy(() => import("./pages/Location.tsx").then(m => ({ default: m.Location })));
const OpeningHours = lazy(() => import("./pages/OpeningHours.tsx").then(m => ({ default: m.OpeningHours })));
const Impressum = lazy(() => import("./pages/Impressum.tsx").then(m => ({ default: m.Impressum })));
const Datenschutz = lazy(() => import("./pages/Datenschutz.tsx").then(m => ({ default: m.Datenschutz })));

function App() {

    return (
        <>
            <div id="top-bar-wrap">
                <div id="top-bar">
                    <div id="top-bar-inner">

                        <span className="topbar-content">baeckerei@strohmaierkg.at | 03116 8283</span>

                        <div id="top-bar-social">
                            <a href="https://www.facebook.com/kurt.strohmaier.144" target="_blank" rel="noopener noreferrer">
                                <img loading="lazy" src={facebook_logo} className="social-icon" alt="Facebook" width={24} height={24} />
                            </a>
                            <a href="https://www.instagram.com/kurt.strohmaier.144/" target="_blank" rel="noopener noreferrer">
                                <img loading="lazy" src={instagram_logo} className="social-icon" alt="Instagram" width={24} height={24} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <hr></hr>

            <Navbar/>
            <main>
                <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/cafe" element={<Cafe/>}/>
                        <Route path="/location" element={<Location/>}/>
                        <Route path="/offnungszeiten" element={<OpeningHours/>}/>
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer/>
        </>
    )
}

export default App