import React, { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
// import Checkout from "./Checkout";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reducer, { initialState, actionTypes } from "./reducer";
import { StateProvider } from "./StateProvider";

function App() {
  const [{}, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/checkout" element={<Checkout />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
