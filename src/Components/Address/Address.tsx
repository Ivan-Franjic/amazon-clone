import { IAddressData } from "../../Types/Address.type";
import { Link } from "react-router-dom";
export default function Address({
  id,
  name,
  street,
  city,
  country,
  phone,
}: IAddressData) {
  return (
    <div className="flex flex-col w-48 h-48 bg-white border border-gray shadow rounded-lg lg:w-80 lg:h-64">
      <div className="px-5 border-b border-gray shadow mt-2">
        <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
          Default:
        </p>
      </div>
      <div className="flex flex-col px-5 mt-2">
        <p className="flex text-xs font-bold tracking-tight text-black mb-0.5 lg:text-sm">
          {name}
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          {street}
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          {city}
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          {country}
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          {phone}
        </p>
      </div>
      <div className="flex gap-3 px-5 mt-6 lg:mt-10">
        <Link
          to={`/account/addresses/editaddress/${id}`}
          className="flex text-xs tracking-tight text-lblue mb-2.5 lg:text-sm hover:underline hover:text-red"
        >
          Edit
        </Link>
        <p className="flex border-r-2 h-4"></p>
        <Link
          to={`/account/addresses/deleteaddress/${id}`}
          className="flex text-xs tracking-tight text-lblue mb-2.5 lg:text-sm hover:underline hover:text-red"
        >
          Remove
        </Link>
      </div>
    </div>
  );
}
