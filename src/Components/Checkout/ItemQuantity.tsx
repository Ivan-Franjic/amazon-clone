import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IItemQuantityData } from "../../Types/ItemQuantity.type";

export default function ItemQuantity({
  amount,
  setDecrease,
  setIncrease,
}: IItemQuantityData) {
  return (
    <div className="flex justify-center">
      <div className="flex w-8 h-6">
        <button className="text-xs" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <p className="border solid px-2">{amount}</p>
        <button className="text-xs" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
