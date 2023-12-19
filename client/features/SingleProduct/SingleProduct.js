import React, { useEffect, useState } from "react";
import axios from "axios";
import { addToCart, fetchCartItems, updateCartItem } from "../cart/cartItemSlice";
import { useDispatch, useSelector } from "react-redux";


function SingleProduct() {
    const auth = useSelector((state) => state.auth);
    const { cartItem } = useSelector((state) => state.cartItem)
    const userId = auth.me ? auth.me.id : null;
    const dispatch = useDispatch();
    const [product, setProduct] = useState({})

    async function fetchProduct() {
        let response = await axios.get("/api/products/" +
            window.location.pathname.split("/")[2])

        setProduct(response.data)
    }
    const handleAddClick = () => {
        const itemExists = cartItem.find((item) => item.productId === product.id)
        console.log("product handle click", itemExists)
        console.log("product handle click cart item", cartItem)
        if (itemExists) {
            dispatch(updateCartItem({ userId: userId, productId: product.id, quantity: itemExists.quantity + 1 }))
                .unwrap()
                .then(({ userId }) => {
                    dispatch(fetchCartItems(userId));
                });
        } else {
            dispatch(addToCart({ userId: userId, productId: product.id }))
                .unwrap()
                .then(({ userId }) => {
                    dispatch(fetchCartItems(userId));
                });
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className="single-product">
            <h1>{product.name}</h1>
            <div className="single-product-main">
                <img src={product.imageUrl}></img>
                <div className="single-product-buy">
                    <p className="single-product-price">Price : ${product.price}</p>
                    <button className="add-to-cart" onClick={handleAddClick}>Add to Cart</button>
                </div>
                <div className="single-product-info">
                    <h3>Genre:{product.genre}</h3>
                    <h4>Description:</h4>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )


}
export default SingleProduct