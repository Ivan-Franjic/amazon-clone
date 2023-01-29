import React, { useEffect, useReducer } from "react";
import "./Category.css";
import reducer, { initialState, actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
interface ICategoryProps {
  id: string;
  title: string;
  image: string;
}

export default function Category({ id, title, image }: ICategoryProps) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="category">
      <div className="category_title">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
