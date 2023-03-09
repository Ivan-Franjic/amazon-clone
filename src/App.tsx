import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Topbar from "./Components/Header/Topbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Basket from "./Pages/Basket";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account/Account";
import Orders from "./Pages/Account/Orders";
import AddReview from "./Pages/Account/AddReview";
import Addresses from "./Pages/Account/Address/Addresses";
import AddAddress from "./Pages/Account/Address/AddAddress";
import EditAddress from "./Pages/Account/Address/EditAddress";
import DeleteAddress from "./Pages/Account/Address/DeleteAddress";
import LoginSecurity from "./Pages/Account/LoginSecurity";
import EditName from "./Pages/Account/EditName";
import EditEmail from "./Pages/Account/EditEmail";
import EditPassword from "./Pages/Account/EditPassword";
import { auth } from "./Common/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { actionTypes } from "./Common/reducer";
import { useGlobalContext } from "./Common/StateProvider";

function App() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: actionTypes.SET_USER,
          current_user: authUser,
        });
        sessionStorage.setItem("currentUserId", authUser.uid);
        sessionStorage.setItem("currentUserEmail", authUser.email!);
        sessionStorage.setItem("currentUserDisplayName", authUser.displayName!);
      } else {
        // the user is logged out
        dispatch({
          type: actionTypes.SET_USER,
          current_user: null,
        });
        sessionStorage.clear();
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
            path="/account/orders/order/:orderId"
            element={<AddReview />}
          ></Route>
          <Route
            path="/account/login&security"
            element={<LoginSecurity />}
          ></Route>
          <Route
            path="/account/login&security/editname"
            element={<EditName />}
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
          <Route
            path="/account/addresses/deleteaddress/:addressId"
            element={<DeleteAddress />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:categoryName" element={<Products />}></Route>
          <Route
            path="/productdetails/:productCategory/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
