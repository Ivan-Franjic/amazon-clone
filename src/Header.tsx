import React, { useEffect, useReducer } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import reducer, { initialState, actionTypes } from "./reducer";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
export default function Header() {
  const [{ basket, user }, dispatch] = useReducer(reducer, initialState);

  const handleAuthentication = () => {
    signOut(auth);
  };
  console.log(user);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BiSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {user !== null ? (
          <Link to={"/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello {user}</span>
              <span className="header__optionLineTwo">{"Sign Out"}</span>
            </div>
          </Link>
        ) : (
          <Link to={"/login"}>
            <div className="header__option">
              <span className="header__optionLineOne">Hello {"Guest"}</span>
              <span className="header__optionLineTwo">{"Sign In"}</span>
            </div>
          </Link>
        )}
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
