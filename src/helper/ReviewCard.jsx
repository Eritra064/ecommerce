import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useState } from "react";

const ReviewCard = ({ name, description, individualRating }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rounded shadow d-flex flex-column container mx-auto pt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="font-weight-bold" style={{ fontSize: "20px" }}>
            {name}
          </p>
        </div>
        <div>
          <Rating
            readonly
            style={{ maxWidth: 180, fontSize: "20px" }}
            value={rating}
            onChange={setRating}
            initialRating={individualRating}
            emptySymbol={<CiStar />}
            fullSymbol={<FaStar style={{ color: "#FFBF00" }} />}
          />
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
