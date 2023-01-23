import React, { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Topbar from "./Topbar";
import Home from "./Home";
import Products from "./Products";
// import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reducer, { initialState, actionTypes } from "./reducer";
import { useGlobalContext } from "./StateProvider";

function App() {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: actionTypes.SET_USER,
          current_user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          current_user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Topbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
