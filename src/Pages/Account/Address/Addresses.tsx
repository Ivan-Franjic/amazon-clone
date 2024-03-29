import { useEffect, useState } from "react";
import Address from "../../../Components/Address/Address";
import AddAddress from "../../../Components/Address/AddAddress";
import { Link } from "react-router-dom";
import { db } from "../../../Common/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useGlobalContext } from "../../../Common/StateProvider";
import { actionTypes } from "../../../Common/reducer";
import { IAddressData } from "../../../Types/Address.type";
import { useTranslation } from "react-i18next";

export default function Addresses() {
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const currentUserId = sessionStorage.getItem("currentUserId");
  const getAddresses = async () => {
    const addressescol = query(
      collection(db, "addresses"),
      where("user_id", "==", currentUserId)
    );
    const querySnapshot = await getDocs(addressescol);
    dispatch({
      type: actionTypes.GET_ADDRESSES,
      item: querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        street: doc.data().street,
        city: doc.data().city,
        country: doc.data().country,
        phone: doc.data().phone,
      })),
    });
    setLoading(false);
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      {loading && <p>{t("loading")}</p>}
      {!loading && (
        <div className="flex flex-col items-center ml-2 mt-2 mb-96 lg:items-start lg:ml-16">
          <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
            {t("your_addresses")}
          </p>
          <div className="flex flex-col justify-center gap-4 mt-2 lg:flex-row">
            <Link to={"/account/addresses/addaddress"}>
              <AddAddress />
            </Link>
            {state.addresses[1].map((item: IAddressData) => (
              <Address
                key={item.id}
                id={item.id}
                name={item.name}
                street={item.street}
                city={item.city}
                country={item.country}
                phone={item.phone}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
