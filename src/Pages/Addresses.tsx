import Address from "../Components/Address/Address";
import AddAddress from "../Components/Address/AddAddress";
export default function Addresses() {
  return (
    <div className="flex flex-col items-start ml-16">
      <p className="flex lg:py-5 lg:text-3xl">Your Addresses</p>
      <div className="flex justify-center gap-4 mt-2">
        <AddAddress />
        <Address />
      </div>
    </div>
  );
}
