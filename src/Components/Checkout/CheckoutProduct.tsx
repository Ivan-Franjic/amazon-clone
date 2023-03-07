import { useGlobalContext } from "../../Common/StateProvider";
import { ICheckoutProductData } from "../../Types/CheckoutProduct.type";

export default function CheckoutProduct({
  id,
  name,
  image,
  price,
  amount,
}: ICheckoutProductData) {
  return (
    <div className="flex mx-2.5 my-5 border-b border-solid border-gray">
      <div className="w-44 h-44">
        <img className="object-contain" src={image} />
      </div>
      <div className="flex ml-5">
        <div className="flex flex-col">
          <p className="flex text-lg text-black truncate">{name}</p>
          <p className="flex text-black truncate">Qty: {amount}</p>
        </div>
        <p className="flex ml-5 text-lg">
          <strong>${price}</strong>
        </p>
      </div>
    </div>
  );
}
