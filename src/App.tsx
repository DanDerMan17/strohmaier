import {Navbar} from "./components/Navbar.tsx";
import {Link, Route, Routes} from "react-router-dom";
import {Products} from "./pages/Products.tsx";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import logo_top from "./assets/res/logo_top.jpg";
import logo_vulkanland from "./assets/res/logo_vulkanland.png";


function App() {

    return (
        <>
            <div className={"logo_top"}>
                <Link to="/">
                    <img src={logo_top} height={150} />
                </Link>
            </div>

            <div className={"logo_vulcan"}>
                <img src={logo_vulkanland} height={125}/>
            </div>

            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        </>
    )
}

export default App
