import { IProduct } from "../models/IProduct.ts";
import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

interface IPropsProductCard {
    product: IProduct;
}

export const ProductCard: React.FC<IPropsProductCard> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="product-card">
                <div
                    className="product-image-container"
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="product-image"
                    />
                    <div className="product-overlay">Zeige Bild an</div>
                </div>

                <h3 style={{ margin: "12px 0 8px 0", textAlign: "center" }}>
                    {product.name}
                </h3>
                <p style={{ fontWeight: "bold", color: "#6b4d27" }}>
                    € {product.price.toFixed(2)}
                </p>
            </div>

            {isModalOpen &&
                ReactDOM.createPortal(
                    <div
                        className="modal"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="modal-image"
                            />
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="modal-close-button"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};
