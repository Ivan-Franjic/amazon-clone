import { ICategoryData } from "../../Types/Category.type";

export default function Category({ id, name, image }: ICategoryData) {
  return (
    <div className="flex flex-col w-40 h-48 bg-white border-gray shadow lg:w-80 lg:h-96">
      <div className="px-5 pb-5 mt-2 lg:mt-20">
        <h5 className="text-xs font-semibold tracking-tight text-black lg:text-md">
          {name}
        </h5>
      </div>
      <img
        className="flex self-center w-14 h-20 lg:w-32 lg:h-40"
        src={image}
        alt="product image"
      />
    </div>
  );
}
