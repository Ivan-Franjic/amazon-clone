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
    <div className="flex flex-col w-40 h-52 bg-lgray border border-gray shadow lg:w-52 lg:h-80">
      <img
        className="flex self-center w-32 h-40 mb-6"
        src={image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-md tracking-tight text-black">{name}</h5>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-md font-bold text-black">${price}</span>
        </div>
      </div>
    </div>
  );
}
