import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Common/StateProvider";

export default function LoginSecurity() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="flex flex-col items-center mt-20">
      <p className="flex py-5 font-semibold lg:text-3xl lg:font-normal">
        Login & Security
      </p>
      <div className="flex flex-col w-11/12 h-full bg-white border border-gray rounded-md lg:w-2/5">
        <div className="flex justify-between px-5 border-b border-gray mt-2">
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black lg:text-sm">
              Name:
            </p>
            <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
              {state.user.displayName}
            </p>
          </div>
          <Link to={"/account/login&security/editname"}>
            <button className="flex justify-center bg-lgray border border-gray rounded-none w-24 h-8 hover:bg-gray">
              Edit
            </button>
          </Link>
        </div>
        <div className="flex justify-between px-5 border-b border-gray mt-2">
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black lg:text-sm">
              Email:
            </p>
            <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
              {state.user.email}
            </p>
          </div>
          <Link to={"/account/login&security/editemail"}>
            <button className="flex justify-center bg-lgray border border-gray rounded-none w-24 h-8 hover:bg-gray">
              Edit
            </button>
          </Link>
        </div>
        <div className="flex justify-between px-5 border-b border-gray mt-2">
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black lg:text-sm">
              Mobile number:
            </p>
            <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
              1234567898
            </p>
          </div>
          <Link to={"/account/login&security/editcontact"}>
            <button className="flex justify-center bg-lgray border border-gray rounded-none w-24 h-8 hover:bg-gray">
              Edit
            </button>
          </Link>
        </div>
        <div className="flex justify-between px-5 mt-2">
          <div className="flex flex-col">
            <p className="flex text-xs font-semibold tracking-tight text-black lg:text-sm">
              Password:
            </p>
            <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
              *********
            </p>
          </div>
          <Link to={"/account/login&security/editpassword"}>
            <button className="flex justify-center bg-lgray border border-gray rounded-none w-24 h-8 hover:bg-gray">
              Edit
            </button>
          </Link>
        </div>
      </div>
      <Link to={"/account"}>
        <button className="flex justify-center bg-lorange mt-6 border border-black rounded-none w-16 h-10 hover:bg-orange">
          Done
        </button>
      </Link>
    </div>
  );
}
