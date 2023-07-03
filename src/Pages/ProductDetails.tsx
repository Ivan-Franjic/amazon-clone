import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Product from "../Components/Product/Product";
import ProductReview from "../Components/Product/ProductReview";
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
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const { productCategory, productId } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
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
        rating_total: state.productDetails.data.rating_total,
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
        rating_total: doc.data().rating_total,
        price: doc.data().price,
        quantity: doc.data().quantity,
        category: doc.data().category,
        description: doc.data().description,
      })),
    });
    const reviewscol = query(
      collection(db, "reviews"),
      where("product_id", "==", productId)
    );
    const querySnapshotReviews = await getDocs(reviewscol);
    dispatch({
      type: actionTypes.GET_PRODUCT_REVIEWS,
      item: querySnapshotReviews.docs.map((doc) => ({
        id: doc.id,
        headline: doc.data().headline,
        review: doc.data().review,
        rating: doc.data().rating,
        username: doc.data().username,
      })),
    });

    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <>
      {loading && <p>{t("loading")}</p>}
      {!loading && (
        <>
          <div className="flex flex-col lg:flex-row">
            <div className="flex p-2 lg:w-2/5 lg:h-2/5 lg:p-10 overflow-hidden">
              <img
                className="object-cover h-2/5 w-2/5 hover:scale-110 ease-in duration-500"
                src={state.productDetails.data.image}
                alt="product image"
              />
            </div>
            <div className="flex flex-col">
              <p className="flex p-2 lg:p-5">
                {state.productDetails.data.name}
              </p>
              <div className="flex p-2 lg:p-1 lg:ml-4 lg:border-b lg:border-solid lg:border-gray">
                <Rating
                  className="lg:mb-2.5"
                  name="half-rating-read"
                  defaultValue={state.productDetails.data.rating}
                  precision={0.1}
                  readOnly
                />
                <p className="text-lblue ml-2">
                  {state.productDetails.data.rating_total} {t("ratings")}
                </p>
              </div>
              <p className="flex p-2 lg:p-5">
                ${state.productDetails.data.price}
              </p>
              <p className="flex p-2 lg:p-5">
                {state.productDetails.data.description}
              </p>
            </div>
            <div className="flex lg:flex-col lg:border lg:border-gray lg:shadow lg:mt-5 lg:ml-96 lg:w-56 lg:h-96">
              <p className="hidden text-xl text-bold lg:flex lg:p-5">
                ${state.productDetails.data.price}
              </p>
              <p className="hidden text-sm lg:flex lg:ml-5">
                {t("free_returns")}
              </p>
              {(() => {
                if (state.productDetails.data.quantity === 0) {
                  return (
                    <p className="hidden text-sm text-red lg:flex lg:p-5">
                      {t("not_available")}
                    </p>
                  );
                } else if (
                  state.productDetails.data.quantity > 0 &&
                  state.productDetails.data.quantity < 5
                ) {
                  return (
                    <>
                      <p className="hidden text-sm text-orange lg:flex lg:p-5">
                        {t("only")} {state.productDetails.data.quantity}{" "}
                        {t("available")}.
                      </p>
                      <div className="flex mb-40 p-2 lg:mb-2 lg:p-1 lg:ml-5">
                        Qty:
                        <ItemQuantity
                          amount={amount}
                          setDecrease={setDecrease}
                          setIncrease={setIncrease}
                        ></ItemQuantity>
                      </div>
                      <div className="flex flex-col justify-center">
                        <button
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange w-56 lg:w-48"
                          onClick={() =>
                            addToBasket(state.productDetails.data.id, amount)
                          }
                        >
                          {t("add_basket")}
                        </button>
                        <Link
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange w-56 lg:w-48"
                          to={`/basket`}
                        >
                          <button
                            onClick={() =>
                              addToBasket(state.productDetails.data.id, amount)
                            }
                          >
                            {t("buy_now")}
                          </button>
                        </Link>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <p className="hidden text-sm text-green lg:flex lg:p-5">
                        {t("stock")}.
                      </p>
                      <div className="flex mb-40 p-2 lg:mb-2 lg:p-1 lg:ml-5">
                        Qty:
                        <ItemQuantity
                          amount={amount}
                          setDecrease={setDecrease}
                          setIncrease={setIncrease}
                        ></ItemQuantity>
                      </div>
                      <div className="flex flex-col w-full justify-center">
                        <button
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange w-56 lg:w-48"
                          onClick={() =>
                            addToBasket(state.productDetails.data.id, amount)
                          }
                        >
                          {t("add_basket")}
                        </button>
                        <Link
                          className="h-10 mx-2.5 mt-2.5 bg-lorange text-black border-none rounded-3xl hover:bg-orange w-56 lg:w-48"
                          to={`/basket`}
                        >
                          <button
                            onClick={() =>
                              addToBasket(state.productDetails.data.id, amount)
                            }
                          >
                            {t("buy_now")}
                          </button>
                        </Link>
                      </div>
                    </>
                  );
                }
              })()}
              <div className="hidden lg:flex lg:flex-col lg:mt-2.5">
                <p className="text-xs p-1">{t("return_policy")}</p>
                <p className=" text-xs p-1">{t("support")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 my-10 lg:my-32">
            <p className="flex ml-10 text-2xl font-semibold">
              {t("related_products")}
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
                    rating_total={item.rating_total}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    description={item.description}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 my-10 lg:my-32">
            <p className="flex ml-10 text-2xl font-semibold">
              {t("customer_reviews")}
            </p>
            <div className="flex flex-col items-center gap-10 ml-4">
              {state.productReviews[1].map((item: any) => (
                <ProductReview
                  key={item.id}
                  id={item.id}
                  rating={item.rating}
                  headline={item.headline}
                  review={item.review}
                  username={item.username}
                ></ProductReview>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
