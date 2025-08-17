import logo_vulkanland from "../assets/res/logo_vulkanland.png";
import {ProductCard} from "../components/ProductCard.tsx";
import {products_mock} from "../data/products_mock.ts";

export const Products = () => {
    return (
        <>
            <div className={"background"} style={{ padding: "2rem 1rem" }}>
                <div className="logo_vulcan">
                    <img src={logo_vulkanland} height={125}/>
                </div>
                <h1 style={{ marginBottom: "3rem" }}>Unsere Produkte</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "32px",
                        padding: "0 20px 80px",
                        maxWidth: "1600px", // Increased from 1200px
                        margin: "0 auto",
                        width: "100%",
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