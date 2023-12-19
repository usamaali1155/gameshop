import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchCartItems,
  updateCartItem,
} from "../cart/cartItemSlice";
import { addToGuestCart } from "../cart/guesCartSlice";

function Product({ product }) {
  const auth = useSelector((state) => state.auth);
  const { cartItem } = useSelector((state) => state.cartItem);
  const userId = auth.me ? auth.me.id : null;
  const dispatch = useDispatch();

  useEffect(() => {
  }, [cartItem]);

  const handleAddClick = () => {
    if (userId) {
      const itemExists = cartItem.find((item) => item.productId === product.id);

      if (itemExists) {
        dispatch(
          updateCartItem({
            userId: userId,
            productId: product.id,
            quantity: itemExists.quantity + 1,
          })
        ).then((res) => {
          console.log(userId);

          dispatch(fetchCartItems(userId));
        });
      } else {
        dispatch(addToCart({ userId: userId, productId: product.id })).then(
          (res) => {
            console.log("userId");

            dispatch(fetchCartItems(userId));
          }
        );
      }
    } else {
      dispatch(addToGuestCart(product));
    }
  };

  return (
    <div className="product">
      <Link to={"/products/" + product.id}>
        <div className="product-image">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-genre">Genre:{product.genre}</p>
          <div className="product-buy">
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      </Link>
      <button className="add-to-cart" onClick={handleAddClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
