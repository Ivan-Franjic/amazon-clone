import React, { useEffect, useReducer } from "react";
import "./CheckoutProduct.css";
import reducer, { initialState, actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
import { ICheckoutProductData } from "../../Types/CheckoutProduct.type";

export default function CheckoutProduct({
  id,
  name,
  image,
  price,
  rating,
  hideButton,
}: ICheckoutProductData) {
  const { state, dispatch } = useGlobalContext();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}
