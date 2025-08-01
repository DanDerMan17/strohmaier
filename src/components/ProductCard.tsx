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
            <div
                style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    padding: "16px",
                    maxWidth: "240px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                }
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // ← Schatten NUR fürs Bild
                        borderRadius: "8px",
                        overflow: "hidden", // ← rundet Schatten sauber ab
                    }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            opacity: 0,
                            transition: "opacity 0.3s",
                        }}
                        className="hover-overlay"
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.opacity = "1")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.opacity = "0")
                        }
                    >
                        Zeige Bild an
                    </div>
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
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            overflowY: "auto",
                            zIndex: 9999,
                            padding: "48px 0",
                            boxSizing: "border-box",
                        }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            style={{
                                position: "relative",
                                maxWidth: "90vw",
                                margin: "0 auto",
                                paddingBottom: "16px",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "12px",
                                    display: "block",
                                }}
                            />
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    position: "absolute",
                                    top: "-12px",
                                    right: "-12px",
                                    background: "#fff",
                                    border: "none",
                                    borderRadius: "50%",
                                    width: "32px",
                                    height: "32px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                    lineHeight: "32px",
                                    boxShadow: "0 0 6px rgba(0, 0, 0, 0.3)",
                                }}
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
