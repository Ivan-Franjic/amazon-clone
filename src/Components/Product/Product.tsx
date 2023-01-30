import React, { useEffect, useReducer } from "react";
import "./Product.css";
import reducer, { initialState, actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
import { IProductData } from "../../Types/Product.type";

export default function Product({
  id,
  category,
  description,
  name,
  image,
  price,
  rating,
}: IProductData) {
  const { state, dispatch } = useGlobalContext();
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_title">
        <p>{name}</p>
      </div>
      <img src={image} alt="" />
      <div className="product_rating">
        {Array(rating)
          .fill(rating)
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}
