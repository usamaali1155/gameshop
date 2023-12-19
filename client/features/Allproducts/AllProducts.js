import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import search from "../search"
export default function AllProducts({ searchString, setSearchString }) {
    const products = search(searchString, useSelector(state => state.products))
    return (
        <div className="products-wrapper">
            <h1>All Products</h1>
            <div className="products">
                {products.map(product => <Product key={product.name} product={product} />)}
            </div>
        </div>
    )
}