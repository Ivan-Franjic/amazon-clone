import { Link } from "react-router-dom";
export default function Account() {
  return (
    <div className="flex flex-col">
      <p className="font-semibold">Your Account</p>
      <Link to={`/account/orders`}>
        <div className="flex w-40 h-48 bg-white border-gray shadow lg:w-80 lg:h-96">
          <img
            className="flex self-center w-14 h-20 lg:w-32 lg:h-40"
            src=""
            alt="product image"
          />
          <div className="px-5 pb-5 mt-2 lg:mt-20">
            <h5 className="text-xs font-semibold tracking-tight text-black lg:text-lg">
              Your Orders
            </h5>
            <p>Track, return or buy things again</p>
          </div>
        </div>
      </Link>

      <Link to={`/account/edit`}>
        <div className="flex w-40 h-48 bg-white border-gray shadow lg:w-80 lg:h-96">
          <img
            className="flex self-center w-14 h-20 lg:w-32 lg:h-40"
            src=""
            alt="product image"
          />
          <div className="px-5 pb-5 mt-2 lg:mt-20">
            <h5 className="text-xs font-semibold tracking-tight text-black lg:text-lg">
              Login & Security
            </h5>
            <p>Edit login, name and mobile number</p>
          </div>
        </div>
      </Link>

      <Link to={`/account/addresses`}>
        <div className="flex w-40 h-48 bg-white border-gray shadow lg:w-80 lg:h-96">
          <img
            className="flex self-center w-14 h-20 lg:w-32 lg:h-40"
            src=""
            alt="product image"
          />
          <div className="px-5 pb-5 mt-2 lg:mt-20">
            <h5 className="text-xs font-semibold tracking-tight text-black lg:text-lg">
              Your Addresses
            </h5>
            <p>Edit addresses and delivery preferences for orders and gifts</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
