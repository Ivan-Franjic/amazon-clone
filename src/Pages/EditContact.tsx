import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePhoneNumber } from "firebase/auth";
import { auth } from "../Common/firebase";
import { useGlobalContext } from "../Common/StateProvider";

export default function EditContact() {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const [formData, setFormData] = useState({
    phone: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // updatePhoneNumber(auth.currentUser!, formData.phone)
    //   .then(() => {
    //     navigate("/account/login&security");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
        Change Your Phone Number
      </p>
      <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
        <p className="flex p-2 text-xs lg:text-base">
          If you want to change the number associated with your Amazon customer
          account, you may do so below. Make sure that you click the Save
          Changes button when you have finished.
        </p>
        <form className="flex px-5 mt-2">
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              New number
            </p>
            <input
              name="contact"
              type="tel"
              value="12345678899"
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
            />
            <button className="flex justify-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
