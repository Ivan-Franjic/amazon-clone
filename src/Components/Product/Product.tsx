import { IProductData } from "../../Types/Product.type";

export default function Product({
  id,
  image,
  name,
  rating,
  price,
  category,
  description,
}: IProductData) {
  return (
    <div className="flex flex-col w-52 h-80 bg-gray-100 border border-gray-200 shadow ">
      <img
        className="flex self-center w-32 h-40 mb-6"
        src={image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-md tracking-tight text-gray-900 ">{name}</h5>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-md font-bold text-gray-900 ">${price}</span>
        </div>
      </div>
    </div>
  );
}
