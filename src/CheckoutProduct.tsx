import React, { useEffect, useReducer } from "react";
import "./CheckoutProduct.css";
import reducer, { initialState, actionTypes } from "./reducer";
import { useGlobalContext } from "./StateProvider";

interface ICheckoutProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  hideButton: any;
}

export default function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  hideButton,
}: ICheckoutProductProps) {
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
        <p className="checkoutProduct__title">{title}</p>
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
