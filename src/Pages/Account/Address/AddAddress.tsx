import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../Common/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useGlobalContext } from "../../../Common/StateProvider";
import { useTranslation } from "react-i18next";

export default function AddAddress() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const [name, setName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { t } = useTranslation();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "addresses"), {
      name: name,
      street: street,
      city: city,
      country: country,
      phone: phone,
      user_id: state.user.uid,
    });
    navigate("/account/addresses");
  };

  return (
    <div className="flex flex-col items-center my-20">
      <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
        {t("add_new_address")}
      </p>
      <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
        <p className="flex p-2 text-xs lg:text-base">
          {t("add_new_address_details")}
        </p>
        <form className="flex px-5 mt-2" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("name")}
            </p>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
              required
            />
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("street")}
            </p>
            <input
              name="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
            />
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("city")}
            </p>
            <input
              name="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
            />
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("country")}
            </p>
            <input
              name="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
            />
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("mobile_number")}
            </p>
            <input
              name="contact"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
            />

            <button
              type="submit"
              className="flex justify-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
            >
              {t("add_address")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
