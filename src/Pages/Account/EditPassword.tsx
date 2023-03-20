import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Common/firebase";
import { useTranslation } from "react-i18next";

export default function EditPassword() {
  const navigate = useNavigate();
  const [new_password, setNew_password] = useState<string>("");
  const [repeat_password, setRepeat_password] = useState<string>("");
  const { t } = useTranslation();

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (new_password === repeat_password) {
      updatePassword(auth.currentUser!, new_password)
        .then(() => {
          navigate("/account/login&security");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert(t("passwords_do_not_match") + "!!");
    }
  };

  return (
    <div className="flex flex-col items-center my-20">
      <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
        {t("change_password")}
      </p>
      <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
        <p className="flex p-2 text-xs lg:text-base">
          {t("change_password_details")}
        </p>
        <form className="flex px-5 mt-2" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("new_password")}
            </p>
            <input
              name="new_password"
              type="password"
              onChange={(e) => setNew_password(e.target.value)}
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
              required
            />
            <p className="flex text-xs font-semibold tracking-tight text-black mb-1 lg:text-sm">
              {t("repeat_new_password")}
            </p>
            <input
              name="repeat_password"
              type="password"
              onChange={(e) => setRepeat_password(e.target.value)}
              className="flex text-xs bg-white border rounded-md p-2 tracking-tight text-black mb-2.5 lg:text-sm"
              required
            />
            <button
              type="submit"
              className="flex justify-center bg-lorange my-6 border border-black rounded-none w-36 h-10 hover:bg-orange"
            >
              {t("save_changes")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
