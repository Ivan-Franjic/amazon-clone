import { ICategoryData } from "../../Types/Category.type";

export default function Category({ id, name, image }: ICategoryData) {
  return (
    <div className="flex flex-col w-80 h-96 bg-white border-gray-200 shadow">
      <div className="px-5 pb-5 mt-20">
        <h5 className="text-md font-semibold tracking-tight text-black ">
          {name}
        </h5>
      </div>
      <img
        className="flex self-center w-32 h-40 "
        src={image}
        alt="product image"
      />
    </div>
  );
}
