import React, { useEffect, useReducer, useContext } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Common/firebase";
import { useGlobalContext } from "../../Common/StateProvider";
export default function Header() {
  const { state, dispatch } = useGlobalContext();

  const handleAuthentication = () => {
    signOut(auth);
  };

  console.log(state.user);

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
        {state.user ? (
          <Link to={"/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {state.user.email}
              </span>
              <span className="header__optionLineTwo">{"Sign Out"}</span>
            </div>
          </Link>
        ) : (
          <Link to={"/login"}>
            <div className="header__option">
              <span className="header__optionLineOne">Hello, {"Guest"}</span>
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

        <Link to="/checkout">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
              {state.basket?.length} {}
              Basket
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
