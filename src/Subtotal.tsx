import React, { useEffect, useReducer } from "react";
import "./Subtotal.css";
import { useGlobalContext } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

export default function Subtotal() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="subtotal">
      {(value: any) => (
        <>
          <p>
            Subtotal ({state.basket.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}

      {"Total: "}
      {getBasketTotal(state.basket)}
      {" $"}
      <button>Proceed to Checkout</button>
    </div>
  );
}
