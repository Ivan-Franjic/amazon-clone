import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../Common/firebase";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { useGlobalContext } from "../../Common/StateProvider";
import { actionTypes } from "../../Common/reducer";
import { useTranslation } from "react-i18next";

export default function AddReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const reviewItemImage = location.state.review_item_image;
  const reviewItemName = location.state.review_item_name;
  const reviewItemId = location.state.review_item_id;
  const [rating, setRating] = useState<number | null>(0);
  const [headline, setHeadline] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const { t } = useTranslation();

  const getProductDetails = async () => {
    const productscol = collection(db, "products");
    const querySnapshotDetails = doc(productscol, reviewItemId);
    const details = await getDoc(querySnapshotDetails);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS,
      item: { id: reviewItemId, data: details.data() },
    });

    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "reviews"), {
      product_id: reviewItemId,
      rating: rating,
      headline: headline,
      review: review,
      username: state.user.displayName,
    });

    const productscol = collection(db, "products");
    const querySnapshotDetails = doc(productscol, reviewItemId);
    const new_rating =
      (state.productDetails.data.rating *
        state.productDetails.data.rating_total +
        rating!) /
      (state.productDetails.data.rating_total + 1);
    updateDoc(querySnapshotDetails, {
      rating: new_rating,
      rating_total: state.productDetails.data.rating_total + 1,
    });

    navigate("/account/orders");
  };

  return (
    <>
      {loading && <p>{t("loading")}</p>}
      {!loading && (
        <>
          <div className="flex flex-col items-center mt-20 mb-96">
            <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
              {t("create_review")}
            </p>
            <div className="flex flex-col w-96 h-full bg-white lg:w-2/5">
              <div className="flex px-5 border-b solid border-gray">
                <img
                  className="object-contain w-28 h-28"
                  src={reviewItemImage}
                />
                <p className="flex ml-2 mt-5">{reviewItemName}</p>
              </div>
              <form className="flex px-5 mt-2" onSubmit={onSubmit}>
                <div className="flex flex-col">
                  <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                    {t("overall_rating")}
                  </p>
                  <Rating
                    className="mb-2.5"
                    name="simple-controlled"
                    value={rating}
                    precision={0.1}
                    onChange={(event, newValue) => {
                      setRating(newValue!);
                    }}
                  />
                  <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                    {t("add_headline")}
                  </p>
                  <input
                    name="headline"
                    type="text"
                    value={headline}
                    placeholder="What's most important to know?"
                    onChange={(e) => setHeadline(e.target.value)}
                    className="flex text-xs w-80 lg:w-96 bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                    required
                  />
                  <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                    {t("add_written_review")}
                  </p>
                  <textarea
                    name="review"
                    value={review}
                    placeholder="What did you like or dislike? What did you use this product for?"
                    onChange={(e) => setReview(e.target.value)}
                    required
                    className="flex text-xs w-80 h-44 lg:w-96 lg:h-44 bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                  />
                  <button
                    type="submit"
                    className="flex justify-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
