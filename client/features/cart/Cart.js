import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./cartItemSlice";
import CartItem from "./CartItem";
import { Box, Typography } from "@mui/material";
import OrderSummary from "./OrderSummary";
import { selectGuestCart, setGuestCartItems } from "./guesCartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userId = auth.me ? auth.me.id : null;
  const error = useSelector((state) => state.cartItem.error);
  const cartStatus = useSelector((state) => state.cartItem.status);

  const cartItems = useSelector((state) =>
    state.auth.me && Object.keys(state.auth.me).length > 0
      ? state.cartItem.cartItem
      : selectGuestCart(state)
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    } else {
      const guestCart = JSON.parse(localStorage.getItem("guestCart") || "[]");
      dispatch(setGuestCartItems(guestCart));
    }
  }, [userId, dispatch]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (
        item.product &&
        item.product.price &&
        !isNaN(Number(item.product.price))
      ) {
        return acc + Number(item.product.price);
      } else {
        console.error("Invalid or missing price in item:", item);
        return acc;
      }
    }, 0);
  }, [cartItems]);

  if (error) {
    return <div>{error}</div>;
  }

  if (cartStatus === "loading") {
    return <div>Loading...</div>;
  } else if (cartStatus === "failed") {
    return <div>{error}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <Box sx={{ flexBasis: "70%", marginRight: "2rem", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
        {cartItems.length === 0 ? (
          <>
            <Typography variant="h6">
              There are no items in the cart.
            </Typography>
            <br />
            <a
              style={{
                border: "2px solid black",
                padding: "10px",
                margin: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "23px",
                fontWeight: "bold",
              }}
              href="/"
            >
              Go to homepage
            </a>
          </>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem checkout={false} item={item} key={item.id} />
            ))}
          </>
        )}
      </Box>
      <Box
        sx={{
          flexBasis: "30%",
        }}
      >
        <OrderSummary checkout={false} subtotal={subtotal} />
      </Box>
    </Box>
  );
};

export default Cart;
