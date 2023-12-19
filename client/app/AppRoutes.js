import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import AllProducts from '../features/Allproducts/AllProducts';
import SingleProduct from '../features/SingleProduct/SingleProduct';
import ShopByGenre from '../features/ShopByGenre/ShopByGenre';
import Cart from "../features/cart/Cart"
import Checkout from "../features/cart/Checkout"
import Complete from '../features/cart/Complete';


const AppRoutes = ({ searchString, setSearchString }) => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/allproducts" element={<AllProducts searchString={searchString} setSearchString={setSearchString} />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/home" element={<Home />} />
        <Route path="/genre/:genre" element={<ShopByGenre searchString={searchString} setSearchString={setSearchString} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/*" element={<Home />} />
        {!isLoggedIn && (
          <><Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
            <Route
              path="/signup"
              element={<AuthForm name="signup" displayName="Sign Up" />}
            />
          </>
        )}
      </Routes>

    </div>
  );
};

export default AppRoutes;
