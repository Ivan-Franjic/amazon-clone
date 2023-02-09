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
    <div className="flex items-center top-0 sticky z-50 h-14 bg-lblue lg:bg-blue">
      <Link to="/">
        <img
          className="object-contain w-12 mt-3.5 mx-5 lg:w-24"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="flex flex-1 items-center">
        <input
          className="p-2.5 w-7/12 h-10 border-none rounded-l-md bg-white text-black"
          type="text"
          placeholder="Search Amazon"
        />
        <BiSearch className="p-1 w-11 h-10 border-none rounded-r-md bg-lorange cursor-pointer hover:bg-orange  " />
      </div>

      <div className="flex justify-evenly">
        {state.user ? (
          <Link to={"/login"}>
            <div
              onClick={handleAuthentication}
              className="flex flex-col h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y"
            >
              <span className="text-xs leading-5 text-left">
                Hello, {state.user.email}
              </span>
              <span className="text-sm font-extrabold">{"Sign Out"}</span>
            </div>
          </Link>
        ) : (
          <Link to={"/login"}>
            <div className="flex flex-col h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
              <span className="text-xs leading-5 text-left">
                Hello, {"Guest"}
              </span>
              <span className="text-sm font-extrabold text-left">
                {"Sign In"}
              </span>
            </div>
          </Link>
        )}
        <Link to="/orders">
          <div className="hidden h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y lg:flex lg:flex-col">
            <span className="text-xs leading-5 text-left">Returns</span>
            <span className="text-sm font-extrabold text-left">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="flex flex-col h-12 p-1 items-center text-white hover:border-solid hover:border-white hover:border-x hover:border-y lg:flex lg:flex-row">
            <AiOutlineShoppingCart />
            <span className="text-sm font-extrabold mx-2.5">
              {state.basket?.length} {}
              Basket
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
