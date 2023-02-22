import { AiOutlinePlus } from "react-icons/ai";
export default function AddAddress() {
  return (
    <div className="flex flex-col w-40 h-48 bg-white border-2 border-dashed border-gray shadow rounded-lg lg:w-80 lg:h-64 cursor-pointer">
      <div className="flex flex-col items-center px-5 mt-16">
        <AiOutlinePlus className="flex text-xs font-bold tracking-tight text-gray mb-0.5 lg:text-5xl" />
        <p className="flex text-xs font-semibold tracking-tight text-dgray mb-0.5 lg:text-2xl">
          Add Address
        </p>
      </div>
    </div>
  );
}
