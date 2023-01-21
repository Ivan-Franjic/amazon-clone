import React, { useEffect, useReducer } from "react";
import "./Product.css";
import reducer, { initialState, actionTypes } from "./reducer";
import { useGlobalContext } from "./StateProvider";
interface IProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export default function Product({
  id,
  title,
  image,
  price,
  rating,
}: IProductProps) {
  const { state, dispatch } = useGlobalContext();
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}
