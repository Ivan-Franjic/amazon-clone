import Order from "../Components/Order/Order";
export default function Orders() {
  return (
    <div className="flex flex-col items-center my-10 gap-4">
      <p className="flex lg:py-5 lg:text-3xl">Your Orders</p>
      <Order />
      <Order />
    </div>
  );
}
