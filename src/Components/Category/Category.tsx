import React, { useEffect, useReducer } from "react";
import "./Category.css";
import reducer, { initialState, actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
import { ICategoryData } from "../../Types/Category.type";

export default function Category({ id, name, image }: ICategoryData) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="category">
      <div className="category_title">
        <p>{name}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
