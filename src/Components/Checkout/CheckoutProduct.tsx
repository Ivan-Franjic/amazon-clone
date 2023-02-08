import reducer, { initialState, actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
import { ICheckoutProductData } from "../../Types/CheckoutProduct.type";

export default function CheckoutProduct({
  id,
  name,
  image,
  price,
  hideButton,
}: ICheckoutProductData) {
  const { state, dispatch } = useGlobalContext();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="flex my-5 border-b border-solid border-gray">
      <img
        className="object-contain ml-2.5 mb-5 w-44 h-44 border-b border-solid border-gray"
        src={image}
      />
      <div className="ml-5">
        <p className="flex text-lg">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {hideButton && (
          <button
            className="mt-2.5 text-lblue bg-white border-none hover:underline"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}
