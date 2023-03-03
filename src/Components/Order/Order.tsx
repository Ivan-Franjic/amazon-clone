import { IOrderData } from "../../Types/Order.type";
export default function Order({
  id,
  name,
  items,
  order_date,
  total,
}: IOrderData) {
  return (
    <div className="flex flex-col w-11/12 h-48 bg-white border border-gray rounded-lg lg:w-2/4 lg:h-content">
      <div className="flex px-5 border-b gap-5 border-gray bg-lgray">
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          ORDER PLACED
          <p>{order_date}</p>
        </div>
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          TOTAL
          <p>${total}</p>
        </div>
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          DISPATCH TO
          <p>{name}</p>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-2 overflow-y-scroll">
        {items.map((item: any) => (
          <div key={item.id} className="flex justify-between">
            <div className="flex my-3">
              <div className="w-28 h-28s">
                <img className="object-contain" src={item.image} />
              </div>
              <div className="flex flex-col ml-2">
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </div>
            </div>
            <strong className="mt-3">${item.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
