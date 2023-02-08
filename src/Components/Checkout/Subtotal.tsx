import { useGlobalContext } from "../../Common/StateProvider";
import { getBasketTotal } from "../../Common/reducer";

export default function Subtotal() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col justify-between ml-5 w-full h-44 p-5 bg-white border-x border-y border-solid rounded-lg border-lgray">
      <>
        <p>
          Subtotal ({state.basket.length} items):{" "}
          <strong>
            {getBasketTotal(state.basket)}
            {" $"}
          </strong>
        </p>
        <small className="flex items-center">
          <input className="mr-1" type="checkbox" /> This order contains a gift
        </small>
      </>
      <button className="w-full h-10 mt-2.5 text-black bg-lorange border-x border-y border-solid rounded hover:bg-orange">
        Proceed to Checkout
      </button>
    </div>
  );
}
