import logo_vulkanland from "../assets/res/logo_vulkanland.png";
import {ProductCard} from "../components/ProductCard.tsx";
import {products_mock} from "../data/products_mock.ts";

export const Products = () => {
    return (
        <>
            <div className={"background"}>
                <div className="logo_vulcan">
                    <img src={logo_vulkanland} height={125}/>
                </div>
                <h1>Unsere Produkte</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "24px",
                        padding: "0 40px 60px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {products_mock.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>


            </div>


        </>
    );
};