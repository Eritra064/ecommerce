import { FaStar } from "react-icons/fa";
const ReviewCard = ({name, description}) => {
  return (
    <div className="rounded shadow d-flex flex-column container mx-auto pt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="font-weight-bold" style={{fontSize: "20px"}}>{name}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <p>
            <FaStar style={{ color: "#FFAD33" }} />
          </p>
          <p>
            <FaStar style={{ color: "#FFAD33" }} />
          </p>
          <p>
            <FaStar style={{ color: "#FFAD33" }} />
          </p>
          <p>
            <FaStar style={{ color: "#FFAD33" }} />
          </p>
          <p>
            <FaStar style={{ color: "rgb(241, 240, 240)" }} />
          </p>
        </div>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
