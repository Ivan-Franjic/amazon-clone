import { actionTypes } from "../../Common/reducer";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";
import { IBasketProductData } from "../../Types/BasketProduct.type";

export default function BasketProduct({
  id,
  name,
  image,
  price,
  category,
  hideButton,
}: IBasketProductData) {
  const { state, dispatch } = useGlobalContext();

  const removeFromBasket = () => {
    // remove the item from the basket
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
        {hideButton && (
          <div className="flex">
            <a
              className="mt-2.5 text-lblue bg-white border-none cursor-pointer hover:underline"
              onClick={removeFromBasket}
            >
              Remove
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
