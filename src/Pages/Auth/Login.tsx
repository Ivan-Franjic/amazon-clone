import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Common/firebase";
import { useTranslation } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation();

  const signIn = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error: Error) => alert(error.message));
  };

  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <Link to="/">
        <img
          className="my-5 mx-auto w-28 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="flex flex-col h-fit w-72 p-5 border-x border-y border-solid rounded border-gray">
        <h1 className="mb-5 font-medium">{t("sign_in")}</h1>

        <form>
          <h5 className="mb-1">{t("email")}</h5>
          <input
            className="h-7 w-full mb-2.5 bg-white text-black border-x border-y border-solid rounded border-black"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="mb-1">{t("password")}</h5>
          <input
            className="h-7 w-full mb-2.5 bg-white text-black border-x border-y border-solid rounded border-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="h-12 w-full mt-2.5 bg-lorange rounded hover:bg-orange"
            type="submit"
            onClick={signIn}
          >
            {t("sign_in")}
          </button>
        </form>

        <p className="mt-3.5 text-xs">{t("sign_in_terms")}</p>
        <Link to={"/register"}>
          <button className="h-12 w-full mt-2.5 bg-black text-sm text-white rounded hover:bg-dgray">
            {t("create_your_amazon_account")}
          </button>
        </Link>
      </div>
    </div>
  );
}
