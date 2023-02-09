import { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../../Common/StateProvider";
export default function Topbar() {
  const { state, dispatch } = useGlobalContext();
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div className="flex items-center sticky h-9 top-14 z-50 bg-lblue">
      <div className="flex items-center overflow-x-auto">
        <div
          className="flex ml-5 p-1 cursor-pointer text-white hover:border-solid hover:border-white hover:border-x hover:border-y"
          onClick={ToggleSidebar}
        >
          <AiOutlineMenu className="w-5 h-5 mr-1 text-white transition-all duration-300 ease-linear" />
          All
        </div>
        <Link to="/free_delivery">
          <div className="flex whitespace-nowrap p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">Free delivery</span>
          </div>
        </Link>
        <Link to="/best_sellers">
          <div className="flex whitespace-nowrap p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">Best sellers</span>
          </div>
        </Link>
        <Link to="/new_releases">
          <div className="flex whitespace-nowrap p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
            <span className="text-base">New releases</span>
          </div>
        </Link>
      </div>

      <div className={`sidemenu ${isOpen == true ? "active" : ""}`}>
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
            <div className="flex place-items-center h-14 bg-lblue lg:bg-blue">
              <span className="ml-8 text-lg font-bold text-white">
                Hello, {"Guest"}
              </span>
            </div>
          </Link>
        )}
        <span className="flex place-items-center text-lg font-bold h-14 ml-8 text-black">
          Trending
        </span>
        <Link to="/best_sellers">
          <div className="flex place-items-center h-14 hover:bg-lgray">
            <span className="ml-8 text-black">Best sellers</span>
          </div>
        </Link>
        <Link to="/new_releases">
          <div className="flex place-items-center h-14 hover:bg-lgray">
            <span className="ml-8 text-black">New releases</span>
          </div>
        </Link>
        <span className="flex place-items-center text-lg font-bold h-14 ml-8 text-black">
          Help & Settings
        </span>
        <div className="cursor-pointer" onClick={ToggleSidebar}>
          <AiOutlineClose />
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </div>
  );
}
