import React, { useEffect, useReducer } from "react";
import "./Product.css";
import reducer, { initialState, actionTypes } from "./reducer";

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
  const [{ basket }, dispatch] = useReducer(reducer, initialState);
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
  // console.log(basket);
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
