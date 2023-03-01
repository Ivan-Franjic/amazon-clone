import { Link } from "react-router-dom";
export default function Account() {
  return (
    <div className="flex flex-col items-center">
      <p className="flex p-5 font-semibold lg:text-3xl lg:font-normal">
        Your Account
      </p>
      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
        <Link to={`/account/orders`}>
          <div className="flex w-80 h-20 bg-white border border-gray rounded-lg lg:h-24 hover:bg-lgray">
            <img
              className="flex w-10 h-10 mx-2 mt-5 rounded-full lg:mx-5 lg:w-12 lg:h-12"
              src="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/orders_icon.png?alt=media&token=d5c2a28d-a815-4206-afbb-1d05d5df84ae"
              alt="product image"
            />
            <div className="flex flex-col items-start mr-2 mt-5">
              <h5 className="text-xs tracking-tight text-black lg:text-base">
                Your Orders
              </h5>
              <p className="text-xs tracking-tight text-dgray lg:text-sm">
                Track, return or buy things again
              </p>
            </div>
          </div>
        </Link>

        <Link to={`/account/login&security`}>
          <div className="flex w-80 h-20 bg-white border border-gray rounded-lg lg:h-24 hover:bg-lgray">
            <img
              className="flex w-10 h-10 mx-2 mt-5 rounded-full lg:mx-5 lg:w-12 lg:h-12"
              src="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/security_icon.png?alt=media&token=362c1f02-8052-4f01-a444-237c1538024d"
              alt="product image"
            />
            <div className="flex flex-col items-start mr-2 mt-5">
              <h5 className="text-xs tracking-tight text-black lg:text-base">
                Login & Security
              </h5>
              <p className="text-xs tracking-tight text-dgray lg:text-sm">
                Edit login, name and mobile number
              </p>
            </div>
          </div>
        </Link>

        <Link to={`/account/addresses`}>
          <div className="flex w-80 h-20 bg-white border border-gray rounded-lg lg:h-24 hover:bg-lgray">
            <img
              className="flex w-10 h-10 mx-2 mt-5 rounded-full lg:mx-5 lg:w-12 lg:h-12"
              src="https://firebasestorage.googleapis.com/v0/b/clone-e98ba.appspot.com/o/address_icon.png?alt=media&token=2e311e65-d370-4661-8548-ada841643e39"
              alt="product image"
            />
            <div className="flex flex-col items-start mr-2 mt-5">
              <h5 className="text-xs tracking-tight text-black lg:text-base">
                Your Addresses
              </h5>
              <p className="text-xs tracking-tight text-dgray lg:text-sm">
                Edit addresses and delivery options
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}