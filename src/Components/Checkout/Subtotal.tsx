import { useGlobalContext } from "../../Common/StateProvider";
import { getBasketTotal } from "../../Common/reducer";
import { Link } from "react-router-dom";

export default function Subtotal() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col justify-between h-44 p-5 bg-white border-x border-y border-solid border-lgray lg:mx-5 lg:rounded-lg lg:w-full">
      <>
        <p>
          Subtotal ({state.basket.length} items):{" "}
          <strong>
            {(Math.round(getBasketTotal(state.basket) * 100) / 100).toFixed(2)}
            {" $"}
          </strong>
        </p>
        <small className="flex items-center">
          <input className="mr-1" type="checkbox" /> This order contains a gift
        </small>
      </>
      <Link to={"/checkout"}>
        <button className="h-10 mt-2.5 text-black bg-lorange border-x border-y border-solid rounded hover:bg-orange">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
