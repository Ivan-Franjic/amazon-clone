import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../Common/firebase";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
export default function DeleteAddress() {
  const navigate = useNavigate();
  const { addressId } = useParams();
  const { t } = useTranslation();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const addressescol = collection(db, "addresses");
    await deleteDoc(doc(addressescol, addressId));
    navigate("/account/addresses");
  };

  const onCancel = async () => {
    navigate("/account/addresses");
  };

  return (
    <>
      <div className="flex flex-col items-center my-20">
        <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
          {t("delete_address")}?
        </p>
        <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
          <form className="flex px-5 mt-2" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <button
                type="submit"
                className="flex justify-center items-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
              >
                {t("delete")}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex justify-center items-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
              >
                {t("cancel")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
