import { AiOutlinePlus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function AddAddress() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-48 h-48 bg-white border-2 border-dashed border-gray shadow rounded-lg lg:w-80 lg:h-64 cursor-pointer">
      <div className="flex flex-col items-center px-5 mt-16">
        <AiOutlinePlus className="flex text-xs font-bold tracking-tight text-gray mb-0.5 lg:text-5xl" />
        <p className="flex text-xs font-semibold tracking-tight text-dgray mb-0.5 lg:text-2xl">
          {t("add_address")}
        </p>
      </div>
    </div>
  );
}
