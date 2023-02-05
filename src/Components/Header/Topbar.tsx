import React, { useEffect, useReducer, useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";
export default function Header() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex items-center sticky h-9 top-14 z-50 bg-lblue">
      <div className="flex items-center justify-evenly">
        <div className="sidemenu__toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="sidemenu__togglerName">All</div>
        <Link to="/free_delivery">
          <div className="flex flex-col p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">Free delivery</span>
          </div>
        </Link>
        <Link to="/best_sellers">
          <div className="flex flex-col p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">Best sellers</span>
          </div>
        </Link>
        <Link to="/new_releases">
          <div className="flex flex-col p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">New releases</span>
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
