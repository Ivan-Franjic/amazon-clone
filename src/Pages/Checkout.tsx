import CheckoutProduct from "../Components/Checkout/CheckoutProduct";
import { useGlobalContext } from "../Common/StateProvider";
import ConfirmOrder from "../Components/Checkout/ConfirmOrder";
export default function Checkout() {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="flex flex-col p-5 h-full w-full bg-lgray lg:flex lg:flex-row">
      <div className="flex w-full h-max bg-white lg:w-4/5">
        <div className="w-full mx-2.5">
          <h2 className="flex p-5 border-b border-solid border-gray text-2xl font-medium">
            Checkout
          </h2>

          {state.basket.map((item: any) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <ConfirmOrder />
      </div>
    </div>
  );
}
