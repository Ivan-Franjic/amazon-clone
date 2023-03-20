import { getBasketTotal } from "../../Common/reducer";
import { db } from "../../Common/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";
import { actionTypes } from "../../Common/reducer";
import { useTranslation } from "react-i18next";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const { t } = useTranslation();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = date + "/" + month + "/" + year;
    let total = (Math.round(getBasketTotal(state.basket) * 100) / 100).toFixed(
      2
    );

    await addDoc(collection(db, "orders"), {
      items: state.basket,
      order_date: currentDate,
      user_id: state.user.uid,
      total: total,
    });
    state.basket.map((curElem: any) => {
      const productscol = collection(db, "products");
      const querySnapshotDetails = doc(productscol, curElem.id);
      updateDoc(querySnapshotDetails, {
        quantity: curElem.max_quantity - curElem.amount,
      });
    });
    dispatch({
      type: actionTypes.EMPTY_BASKET,
    });
    navigate("/account/orders");
  };

  return (
    <div className="flex flex-col justify-between h-44 p-5 bg-white border-x border-y border-solid border-lgray lg:mx-5 lg:rounded-lg lg:w-full">
      <>
        <p>
          {t("subtotal")}:{" "}
          <strong>
            {(Math.round(getBasketTotal(state.basket) * 100) / 100).toFixed(2)}
            {" $"}
          </strong>
        </p>
      </>
      <button
        type="button"
        onClick={onSubmit}
        className="h-10 mt-2.5 text-black bg-lorange border-x border-y border-solid rounded hover:bg-orange"
      >
        {t("pay")}
      </button>
    </div>
  );
}
