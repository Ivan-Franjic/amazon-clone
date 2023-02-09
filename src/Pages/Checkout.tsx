import Subtotal from "../Components/Checkout/Subtotal";
import CheckoutProduct from "../Components/Checkout/CheckoutProduct";
import { useGlobalContext } from "../Common/StateProvider";

export default function Checkout() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col p-5 h-screen bg-lgray lg:flex lg:flex-row">
      <div className="flex w-full h-max bg-white lg:w-4/5">
        <div>
          {state.basket.length > 0 ? (
            <h2 className="flex mr-2.5 p-5 border-b border-solid border-gray text-2xl font-medium">
              Shopping Basket
            </h2>
          ) : (
            <h2 className="flex mr-2.5 p-5 border-b border-solid border-gray text-2xl font-medium">
              Your Amazon Cart is empty.
            </h2>
          )}

          {state.basket.map((item: any) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
        </div>
      </div>
      {state.basket.length > 0 ? (
        <div className="checkout__right">
          <Subtotal />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
