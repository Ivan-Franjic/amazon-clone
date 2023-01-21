import React, { useEffect, useReducer } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import reducer, { initialState, actionTypes } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import { useGlobalContext } from "./StateProvider";

export default function Checkout() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {state.user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {state.basket.map((item: any) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
