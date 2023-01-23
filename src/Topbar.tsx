import React, { useEffect, useReducer, useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./StateProvider";
export default function Header() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="topbar">
      <div className="topbar__nav">
        <div className="sidemenu__toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="sidemenu__togglerName">All</div>
        <Link to="/free_delivery">
          <div className="topbar__option">
            <span className="topbar__optionLineOne">Free delivery</span>
          </div>
        </Link>
        <Link to="/best_sellers">
          <div className="topbar__option">
            <span className="topbar__optionLineOne">Best sellers</span>
          </div>
        </Link>
        <Link to="/new_releases">
          <div className="topbar__option">
            <span className="topbar__optionLineOne">New releases</span>
          </div>
        </Link>
      </div>

      <div className="sidemenu">
        {state.user ? (
          <Link to={"/myaccount"}>
            <div className="sidemenu__option">
              <span className="sidemenu__optionLineOne">
                Hello, {state.user.email}
              </span>
            </div>
          </Link>
        ) : (
          <Link to={"/login"}>
            <div className="sidemenu__option">
              <span className="sidemenu__optionLineOne">Hello, {"Guest"}</span>
            </div>
          </Link>
        )}
        <Link to="/orders">
          <div className="sidemenu__option">
            <span className="sidemenu__optionLineOne">Returns</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
