import { IProductData } from "../../Types/Product.type";
import Rating from "@mui/material/Rating";

export default function Product({
  id,
  image,
  name,
  rating,
  rating_total,
  price,
  quantity,
  category,
  description,
}: IProductData) {
  return (
    <div className="flex flex-col w-40 h-52 bg-lgray border border-gray shadow lg:w-52 lg:h-80">
      <div className="flex self-center w-28 h-40 mb-6 mt-2 lg:w-40 lg:mt-5">
        <img className="object-cover" src={image} alt="product image" />
      </div>
      <div className="px-2 pb-5 lg:px-5">
        <h5 className="text-md tracking-tight text-black">{name}</h5>
        <div className="flex">
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.1}
            readOnly
          />
          <p className="ml-0.5 text-lblue lg:ml-2">({rating_total})</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-md font-bold text-black">${price}</span>
        </div>
      </div>
    </div>
  );
}
