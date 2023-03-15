import Rating from "@mui/material/Rating";
import { IProductReviewData } from "../../Types/ProductReview.type";
import userPhoto from "../../assets/user.jpg";
export default function ProductReview({
  id,
  rating,
  headline,
  review,
  username,
}: IProductReviewData) {
  return (
    <div className="flex flex-col w-96">
      <div className="flex">
        <img
          className="object-contain rounded-full w-10 h-10"
          src={userPhoto}
        />
        <p className="mt-2 ml-2">{username}</p>
      </div>
      <div className="flex">
        <Rating
          className="lg:mb-2.5"
          name="half-rating-read"
          defaultValue={rating}
          precision={0.1}
          readOnly
        />
        <p className="font-semibold ml-2">{headline}</p>
      </div>
      <p className="flex">{review}</p>
    </div>
  );
}
