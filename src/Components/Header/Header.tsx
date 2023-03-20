import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { state, dispatch } = useGlobalContext();
  const { t } = useTranslation();
  // const currentLanguageCode = document.cookie.replace(
  //   /(?:(?:^|.*;\s*)i18next\s*\=\s*([^;]*).*$)|^.*$/,
  //   "$1"
  // );

  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "de",
      name: "Deutsch",
      country_code: "de",
    },
  ];

  const changeLanguage = (e: any) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center top-0 sticky z-50 h-14 bg-lblue lg:bg-blue">
      <Link to="/">
        <img
          className="object-contain w-12 mt-3.5 mx-5 lg:w-24"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="flex flex-1 items-center">
        <input
          className="p-2.5 w-7/12 h-10 border-none rounded-l-md bg-white text-black"
          type="text"
          placeholder="Search Amazon"
        />
        <BiSearch className="p-1 w-11 h-10 border-none rounded-r-md bg-lorange cursor-pointer hover:bg-orange  " />
      </div>

      <div className="flex justify-evenly">
        <div className="lg:max-w-sm">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            onChange={changeLanguage}
          >
            {languages.map(({ code, name, country_code }) => (
              <option
                key={country_code}
                value={code}
                // className={`flag-icon flag-icon-${country_code} mx-2`}
              >
                {name}
              </option>
            ))}
          </select>
        </div>
        {state.user ? (
          <>
            <Link to={"/account"}>
              <div className="flex flex-col h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
                <span className="text-xs leading-5 text-left">
                  Hello, {state.user.displayName}
                </span>
                <span className="text-sm font-extrabold">{t("account")}</span>
              </div>
            </Link>
            <Link to="/account/orders">
              <div className="hidden h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y lg:flex lg:flex-col">
                <span className="text-xs leading-5 text-left">
                  {t("returns")}
                </span>
                <span className="text-sm font-extrabold text-left">
                  {t("orders")}
                </span>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <div className="flex flex-col h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y">
                <span className="text-xs leading-5 text-left">
                  Hello, {t("guest")}
                </span>
                <span className="text-sm font-extrabold text-left">
                  {"Sign In"}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <div className="hidden h-12 p-1 mx-2.5 text-white hover:border-solid hover:border-white hover:border-x hover:border-y lg:flex lg:flex-col">
                <span className="text-xs leading-5 text-left">
                  {t("returns")}
                </span>
                <span className="text-sm font-extrabold text-left">
                  {t("orders")}
                </span>
              </div>
            </Link>
          </>
        )}

        <Link to="/basket">
          <div className="flex flex-col h-12 p-1 items-center text-white hover:border-solid hover:border-white hover:border-x hover:border-y lg:flex lg:flex-row">
            <AiOutlineShoppingCart />
            <span className="text-sm font-extrabold mx-2.5">
              {state.basket?.length} {}
              {t("basket")}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
