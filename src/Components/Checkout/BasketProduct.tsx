import { actionTypes } from "../../Common/reducer";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";
import { IBasketProductData } from "../../Types/BasketProduct.type";
import ItemQuantity from "./ItemQuantity";

export default function BasketProduct({
  id,
  name,
  image,
  price,
  category,
  amount,
}: IBasketProductData) {
  const { state, dispatch } = useGlobalContext();

  const setDecrease = (id: string) => {
    dispatch({ type: actionTypes.SET_DECREASE, id: id });
  };

  const setIncrease = (id: string) => {
    dispatch({ type: actionTypes.SET_INCREASE, id: id });
  };
  const removeFromBasket = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="flex mx-2.5 my-5 border-b border-solid border-gray">
      <div className="w-44 h-44">
        <img className="object-contain" src={image} />
      </div>
      <div className="ml-5">
        <div className="flex">
          <Link to={`/productdetails/${category}/${id}`}>
            <p className="flex text-lg text-black truncate hover:underline">
              {name}
            </p>
          </Link>
          <p className="flex ml-5 text-lg">
            <strong>${price}</strong>
          </p>
        </div>
        <div className="flex mt-2">
          <ItemQuantity
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          ></ItemQuantity>
          <a
            className="ml-5 mt-3 text-lblue bg-white border-none cursor-pointer hover:underline"
            onClick={removeFromBasket}
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  );
}
