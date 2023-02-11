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
        <div className="flex flex-col lg:flex-row">
          <div className="flex p-1 lg:w-2/5 lg:h-2/5 lg:p-5">
            <img
              className="object-cover"
              src={state.productDetails.data.image}
              alt="product image"
            />
          </div>
          <div className="flex flex-col">
            <p className="flex p-1 lg:p-5">{state.productDetails.data.name}</p>
            <div className="flex lg:ml-5 lg:border-b lg:border-solid lg:border-gray">
              {Array(state.productDetails.data.rating)
                .fill(state.productDetails.data.rating)
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
            <p className="flex p-1 lg:p-5">
              ${state.productDetails.data.price}
            </p>
            <p className="flex p-1 lg:ml-5">
              {state.productDetails.data.description}
            </p>
          </div>
          <div className="flex lg:flex-col lg:border lg:border-gray lg:shadow lg:mt-5 lg:ml-96 lg:w-56 lg:h-96">
            <p className="hidden text-xl text-bold lg:flex lg:p-5">
              ${state.productDetails.data.price}
            </p>
            <p className="hidden text-sm lg:flex lg:ml-5 lg:mb-2.5">
              FREE Returns
            </p>
            {(() => {
              if (state.productDetails.data.quantity === 0) {
                return (
                  <p className="hidden text-sm text-red lg:flex lg:p-5">
                    Currently not available.
                  </p>
                );
              } else if (
                state.productDetails.data.quantity > 0 &&
                state.productDetails.data.quantity < 5
              ) {
                return (
                  <>
                    <p className="hidden text-sm text-orange lg:flex lg:p-5">
                      Only {state.productDetails.data.quantity} available.
                    </p>
                    <form className="hidden lg:flex lg:ml-5">
                      <label htmlFor="selectedQuantity">Quantity</label>
                      <select
                        className="bg-white border border-solid border-black ml-2.5"
                        name="selectedQuantity"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </form>
                    <div className="flex flex-col w-full justify-center">
                      <button
                        className="h-10 mx-2.5 mt-2.5 bg-lorange border-none rounded-3xl hover:bg-orange lg:w-48"
                        onClick={addToBasket}
                      >
                        Add to Basket
                      </button>
                      <button
                        className="h-10 mx-2.5 mt-2.5 bg-lorange border-none rounded-3xl hover:bg-orange lg:w-48"
                        onClick={addToBasket}
                      >
                        Buy now
                      </button>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <p className="hidden text-sm text-green lg:flex lg:p-5">
                      In stock.
                    </p>
                    <form className="hidden lg:flex lg:ml-5">
                      <label htmlFor="selectedQuantity">Quantity</label>
                      <select
                        className="bg-white border border-solid border-black ml-2.5"
                        name="selectedQuantity"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </form>
                    <div className="flex flex-col w-full justify-center">
                      <button
                        className="h-10 mx-2.5 mt-2.5 bg-lorange border-none rounded-3xl hover:bg-orange lg:w-48"
                        onClick={addToBasket}
                      >
                        Add to Basket
                      </button>
                      <button
                        className="h-10 mx-2.5 mt-2.5 bg-lorange border-none rounded-3xl hover:bg-orange lg:w-48"
                        onClick={addToBasket}
                      >
                        Buy now
                      </button>
                    </div>
                  </>
                );
              }
            })()}
            <div className="hidden lg:flex lg:flex-col lg:mt-2.5">
              <p className="text-xs p-1">
                Return policy: Returnable within 30 days of receipt
              </p>
              <p className=" text-xs p-1">
                Support: Free Amazon product support included
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
