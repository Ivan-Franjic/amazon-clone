import CheckoutProduct from "../Components/Checkout/CheckoutProduct";
import { useGlobalContext } from "../Common/StateProvider";
import ConfirmOrder from "../Components/Checkout/ConfirmOrder";
import { ICheckoutProductData } from "../Types/CheckoutProduct.type";

export default function Checkout() {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="flex flex-col p-5 bg-lgray lg:flex lg:flex-row">
      <div className="flex bg-white lg:w-4/5 mb-44">
        <div className="w-full mx-2.5">
          <h2 className="flex p-5 text-2xl font-medium">Checkout</h2>

          {state.basket.map((item: ICheckoutProductData) => (
            <div key={item.id} className="border-t border-solid border-gray">
              <CheckoutProduct
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <ConfirmOrder />
      </div>
    </div>
  );
}
