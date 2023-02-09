import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Common/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useGlobalContext } from "../Common/StateProvider";
import reducer, { initialState, actionTypes } from "../Common/reducer";

export default function ProductDetails() {
  const { productId } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: state.productDetails.id,
        name: state.productDetails.data.name,
        image: state.productDetails.data.image,
        price: state.productDetails.data.price,
        rating: state.productDetails.data.rating,
        description: state.productDetails.data.description,
      },
    });
  };

  const getProductDetails = async () => {
    const productscol = collection(db, "products");
    const querySnapshot = doc(productscol, productId);
    const test = await getDoc(querySnapshot);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS,
      item: { id: productId, data: test.data() },
    });

    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && (
        <div className="flex">
          <img
            className="flex w-2/4"
            src={state.productDetails.data.image}
            alt="product image"
          />
          <p className="flex w-4/12">{state.productDetails.data.name}</p>
          <div className="flex w-2/12">
            <button
              className="h-10 w-fit mt-2.5 bg-lorange border-none rounded-3xl hover:bg-orange"
              onClick={addToBasket}
            >
              Add to Basket
            </button>
          </div>
        </div>
      )}
    </>
  );
}
