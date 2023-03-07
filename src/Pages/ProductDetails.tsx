import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Product from "../Components/Product/Product";
import ItemQuantity from "../Components/Checkout/ItemQuantity";
import { db } from "../Common/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useGlobalContext } from "../Common/StateProvider";
import { actionTypes } from "../Common/reducer";
import { IProductData } from "../Types/Product.type";

export default function ProductDetails() {
  const { productCategory, productId } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < state.productDetails.data.quantity
      ? setAmount(amount + 1)
      : setAmount(state.productDetails.data.quantity);
  };

  const addToBasket = (id: string, amount: number) => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: state.productDetails.id,
        name: state.productDetails.data.name,
        image: state.productDetails.data.image,
        price: state.productDetails.data.price,
        rating: state.productDetails.data.rating,
        description: state.productDetails.data.description,
        category: state.productDetails.data.category,
        max_quantity: state.productDetails.data.quantity,
        amount: amount,
      },
    });
  };

  const getProductDetails = async () => {
    const productscol = collection(db, "products");
    const querySnapshotDetails = doc(productscol, productId);
    const details = await getDoc(querySnapshotDetails);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS,
      item: { id: productId, data: details.data() },
    });
    const relatedproductscol = query(
      collection(db, "products"),
      where("category", "==", productCategory)
    );
    const querySnapshotRelated = await getDocs(relatedproductscol);
    dispatch({
      type: actionTypes.GET_RELATED_PRODUCTS,
      item: querySnapshotRelated.docs.map((doc) => ({
        id: doc.id,
        image: doc.data().image,
        name: doc.data().name,
        rating: doc.data().rating,
        price: doc.data().price,
        quantity: doc.data().quantity,
        category: doc.data().category,
        description: doc.data().description,
      })),
    });

    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && (
        <>
          <div className="flex flex-col lg:flex-row">
            <div className="flex p-1 lg:w-2/5 lg:h-2/5 lg:p-5 overflow-hidden">
              <img
                className="object-cover hover:scale-110 ease-in duration-500"
                src={state.productDetails.data.image}
                alt="product image"
              />
            </div>
            <div className="flex flex-col">
              <p className="flex p-1 lg:p-5">
                {state.productDetails.data.name}
              </p>
              <div className="flex lg:ml-5 lg:border-b lg:border-solid lg:border-gray">
                <Rating
                  className="lg:mb-2.5"
                  name="half-rating-read"
                  defaultValue={state.productDetails.data.rating}
                  precision={0.1}
                  readOnly
                />
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
                      <label>Quantity</label>
                      <ItemQuantity
                        amount={amount}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}
                      ></ItemQuantity>
                      <div className="flex flex-col w-full justify-center">
                        <button
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange lg:w-48"
                          onClick={() =>
                            addToBasket(state.productDetails.data.id, amount)
                          }
                        >
                          Add to Basket
                        </button>
                        <Link
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange lg:w-48"
                          to={`/basket`}
                        >
                          <button
                            onClick={() =>
                              addToBasket(state.productDetails.data.id, amount)
                            }
                          >
                            Buy now
                          </button>
                        </Link>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p className="hidden text-sm text-green lg:flex lg:p-5">
                        In stock.
                      </p>
                      <label>Quantity</label>
                      <ItemQuantity
                        amount={amount}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}
                      ></ItemQuantity>
                      <div className="flex flex-col w-full justify-center">
                        <button
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange lg:w-48"
                          onClick={() =>
                            addToBasket(state.productDetails.data.id, amount)
                          }
                        >
                          Add to Basket
                        </button>
                        <Link
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange lg:w-48"
                          to={`/basket`}
                        >
                          <button
                            onClick={() =>
                              addToBasket(state.productDetails.data.id, amount)
                            }
                          >
                            Buy now
                          </button>
                        </Link>
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
          <div className="flex flex-col gap-5 my-10 lg:my-32">
            <p className="flex ml-10 text-2xl font-semibold">
              Products related to this item
            </p>
            <div className="flex gap-5 h-56 overflow-auto mx-10 lg:h-96 ">
              {state.relatedProducts[1].map((item: IProductData) => (
                <Link
                  to={`/productdetails/${item.category}/${item.id}`}
                  key={item.id}
                >
                  <Product
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    description={item.description}
                  />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
