import Subtotal from "../Components/Checkout/Subtotal";
import BasketProduct from "../Components/Checkout/BasketProduct";
import { useGlobalContext } from "../Common/StateProvider";

export default function Basket() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col p-5 bg-lgray lg:flex lg:flex-row">
      <div className="flex flex-col bg-white lg:w-4/5 mb-44">
        <div className="w-full">
          {state.basket.length > 0 ? (
            <h2 className="flex p-5 mx-2.5 text-2xl font-medium">
              Shopping Basket
            </h2>
          ) : (
            <h2 className="flex p-5 text-2xl font-medium">
              Your Amazon Cart is empty.
            </h2>
          )}
        </div>
        {state.basket.map((item: any) => (
          <div key={item.id} className="border-t border-solid border-gray">
            <BasketProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              category={item.category}
              hideButton
            />
          </div>
        ))}
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
