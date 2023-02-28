import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../Common/firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useGlobalContext } from "../Common/StateProvider";
import { actionTypes } from "../Common/reducer";
export default function EditAddress() {
  const navigate = useNavigate();
  const { addressId } = useParams();
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    country: "",
    phone: "",
  });

  const getAddressDetails = async () => {
    const addressescol = collection(db, "addresses");
    const querySnapshotDetails = doc(addressescol, addressId);
    const details = await getDoc(querySnapshotDetails);
    dispatch({
      type: actionTypes.GET_ADDRESS_DETAILS,
      item: { id: addressId, data: details.data() },
    });
    formData.name = state.addressDetails.data.name;
    formData.street = state.addressDetails.data.street;
    formData.city = state.addressDetails.data.city;
    formData.country = state.addressDetails.data.country;
    formData.phone = state.addressDetails.data.phone;
    setLoading(false);
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const addressescol = collection(db, "addresses");
    const querySnapshotDetails = doc(addressescol, addressId);
    const details = await updateDoc(querySnapshotDetails, {
      name: formData.name,
      street: formData.street,
      city: formData.city,
      country: formData.country,
      phone: formData.phone,
    });
    navigate("/account/addresses");
  };

  useEffect(() => {
    getAddressDetails();
  }, []);

  return (
    <>
      {loading && <p>Loading</p>}
      {!loading && (
        <div className="flex flex-col items-center mt-20">
          <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
            Edit Address
          </p>
          <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
            <p className="flex p-2 text-xs lg:text-base">
              If you want to edit address associated with your Amazon customer
              account, you may do so below. Make sure that you click the Save
              Changes button when you have finished.
            </p>
            <form className="flex px-5 mt-2" onSubmit={onSubmit}>
              <div className="flex flex-col">
                <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                  Name
                </p>
                <input
                  name="name"
                  type="text"
                  defaultValue={state.addressDetails.data.name}
                  onChange={onChange}
                  required
                  className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                />
                <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                  Street and house number
                </p>
                <input
                  name="street"
                  type="text"
                  defaultValue={state.addressDetails.data.street}
                  onChange={onChange}
                  required
                  className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                />
                <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                  City, postal code
                </p>
                <input
                  name="city"
                  type="text"
                  defaultValue={state.addressDetails.data.city}
                  onChange={onChange}
                  required
                  className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                />
                <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                  Country
                </p>
                <input
                  name="country"
                  type="text"
                  defaultValue={state.addressDetails.data.country}
                  onChange={onChange}
                  required
                  className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                />
                <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
                  Phone number
                </p>
                <input
                  name="contact"
                  type="tel"
                  defaultValue={state.addressDetails.data.phone}
                  onChange={onChange}
                  required
                  className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
                />
                <button
                  type="submit"
                  className="flex justify-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
