import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IItemQuantityData } from "../../Types/ItemQuantity.type";

export default function ItemQuantity({
  amount,
  setDecrease,
  setIncrease,
}: IItemQuantityData) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
