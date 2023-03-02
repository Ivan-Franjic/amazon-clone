import Subtotal from "../Components/Checkout/Subtotal";
import BasketProduct from "../Components/Checkout/BasketProduct";
import { useGlobalContext } from "../Common/StateProvider";

export default function Basket() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col p-5 h-full w-full bg-lgray lg:flex lg:flex-row">
      <div className="flex w-full h-max bg-white lg:w-4/5">
        <div className="w-full mx-2.5">
          {state.basket.length > 0 ? (
            <h2 className="flex p-5 border-b border-solid border-gray text-2xl font-medium">
              Shopping Basket
            </h2>
          ) : (
            <h2 className="flex p-5 border-b border-solid border-gray text-2xl font-medium">
              Your Amazon Cart is empty.
            </h2>
          )}

          {state.basket.map((item: any) => (
            <BasketProduct
              key={item.id}
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
