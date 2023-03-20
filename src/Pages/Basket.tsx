import Subtotal from "../Components/Checkout/Subtotal";
import BasketProduct from "../Components/Checkout/BasketProduct";
import { useGlobalContext } from "../Common/StateProvider";
import { useEffect } from "react";
import { actionTypes } from "../Common/reducer";
import { IBasketProductData } from "../Types/BasketProduct.type";
import { useTranslation } from "react-i18next";

export default function Basket() {
  const { state, dispatch } = useGlobalContext();
  const { t } = useTranslation();
  const emptyBasket = () => {
    dispatch({
      type: actionTypes.EMPTY_BASKET,
    });
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <>
      <div className="flex flex-col p-5 bg-lgray lg:flex lg:flex-row">
        <div className="flex flex-col bg-white lg:w-4/5 mb-44">
          <div className="w-full">
            {state.basket.length > 0 ? (
              <h2 className="flex p-5 mx-2.5 text-2xl font-medium">
                {t("cart")}
              </h2>
            ) : (
              <h2 className="flex p-5 text-2xl font-medium">
                {t("cart_empty")}
              </h2>
            )}
          </div>
          {state.basket.map((item: IBasketProductData) => (
            <div key={item.id} className="border-t border-solid border-gray">
              <BasketProduct
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                rating_total={item.rating_total}
                category={item.category}
                description={item.description}
                max_quantity={item.max_quantity}
                amount={item.amount}
              />
            </div>
          ))}
        </div>
        {/* <a
          className="mt-2.5 text-lblue bg-white border-none cursor-pointer hover:underline"
          onClick={emptyBasket}
        >
          empty
        </a> */}
        {state.basket.length > 0 ? (
          <div className="checkout__right">
            <Subtotal />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
