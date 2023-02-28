import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Topbar from "./Components/Header/Topbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account";
import Orders from "./Pages/Orders";
import Addresses from "./Pages/Addresses";
import AddAddress from "./Pages/AddAddress";
import EditAddress from "./Pages/EditAddress";
import LoginSecurity from "./Pages/LoginSecurity";
import EditName from "./Pages/EditName";
import EditContact from "./Pages/EditContact";
import EditEmail from "./Pages/EditEmail";
import EditPassword from "./Pages/EditPassword";
import { auth } from "./Common/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { actionTypes } from "./Common/reducer";
import { useGlobalContext } from "./Common/StateProvider";

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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/account/orders" element={<Orders />}></Route>
          <Route
            path="/account/login&security"
            element={<LoginSecurity />}
          ></Route>
          <Route
            path="/account/login&security/editname"
            element={<EditName />}
          ></Route>
          <Route
            path="/account/login&security/editcontact"
            element={<EditContact />}
          ></Route>
          <Route
            path="/account/login&security/editemail"
            element={<EditEmail />}
          ></Route>
          <Route
            path="/account/login&security/editpassword"
            element={<EditPassword />}
          ></Route>
          <Route path="/account/addresses" element={<Addresses />}></Route>
          <Route
            path="/account/addresses/addaddress"
            element={<AddAddress />}
          ></Route>
          <Route
            path="/account/addresses/editaddress/:addressId"
            element={<EditAddress />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:categoryName" element={<Products />}></Route>
          <Route
            path="/productdetails/:productCategory/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
