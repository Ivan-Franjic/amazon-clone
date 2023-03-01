import { getBasketTotal } from "../../Common/reducer";
import { db } from "../../Common/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = date + "/" + month + "/" + year;

    await addDoc(collection(db, "orders"), {
      address: "test",
      items: state.basket,
      order_date: currentDate,
      user_id: state.user.uid,
    });
    navigate("/account/orders");
  };
  return (
    <div className="flex flex-col justify-between h-44 p-5 bg-white border-x border-y border-solid border-lgray lg:mx-5 lg:rounded-lg lg:w-full">
      <>
        <p>
          Subtotal:{" "}
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
        Pay
      </button>
    </div>
  );
}
