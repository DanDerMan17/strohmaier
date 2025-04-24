import {IProduct} from "../models/IProduct.ts";
import * as React from "react";

interface IPropsProductCard {
    product: IProduct;
}

export const ProductCard: React.FC<IPropsProductCard> = ({product}) => {
    return (
        <>
            <h2>{product.name}</h2>
            <img src={product.image} width={"150"} height={"150"}/>
            <p>{product.price}</p>
        </>
    );
};