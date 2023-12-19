import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productSlice from "../features/Allproducts/productSlice";
import cartItemSlice from "../features/cart/cartItemSlice";
import guesCartSlice from "../features/cart/guesCartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productSlice,
    cartItem: cartItemSlice,
    guestCart: guesCartSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
