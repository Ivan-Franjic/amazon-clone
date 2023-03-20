import { useEffect, useState } from "react";
import Order from "../../Components/Order/Order";
import { db } from "../../Common/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { actionTypes } from "../../Common/reducer";
import { useGlobalContext } from "../../Common/StateProvider";
import { IOrderData } from "../../Types/Order.type";
import { useTranslation } from "react-i18next";

export default function Orders() {
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const currentUserId = sessionStorage.getItem("currentUserId");
  const currentUserDisplayName = sessionStorage.getItem(
    "currentUserDisplayName"
  );

  const getOrders = async () => {
    const orderscol = query(
      collection(db, "orders"),
      where("user_id", "==", currentUserId)
    );
    const querySnapshot = await getDocs(orderscol);
    dispatch({
      type: actionTypes.GET_ORDERS,
      item: querySnapshot.docs.map((doc) => ({
        id: doc.id,
        items: doc.data().items,
        order_date: doc.data().order_date,
        total: doc.data().total,
        user_id: doc.data().user_id,
        name: currentUserDisplayName,
      })),
    });
    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {loading && <p>{t("loading")}</p>}
      {!loading && (
        <div className="flex flex-col items-center my-10 gap-4">
          <p className="flex lg:py-5 lg:text-3xl">{t("your_orders")}</p>
          {state.orders[1].map((item: IOrderData) => (
            <Order
              key={item.id}
              id={item.id}
              items={item.items}
              order_date={item.order_date}
              total={item.total}
              name={item.name}
            />
          ))}
        </div>
      )}
    </>
  );
}
