import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../assets/css/productdetail.css";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import returnIcon from "../../../assets/images/return.png";
import delivery from "../../../assets/images/delivery.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReviewCard from "../../../helper/ReviewCard";
import {
  setWishList,
  removeFromWishList,
} from "../../../redux/state-slice/productSlice";
import Rating from "react-rating";

const ProductDetailDescription = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const initialColor = product?.ColorList?.find(
    (color) => color.IsSelected
  )?.ColorCode;
  console.log(product);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [size, setSize] = useState(product?.Size);
  const [quantity, setQuantity] = useState(1);
  const [toggleColor, setToggleColor] = useState(false);
  const [show, setShow] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [rating, setRating] = useState(0);
  const [showFilteredRating, setShowFilteredRating] = useState(false);
  const wishList = useSelector((state) => state.product.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialColor) {
      setSelectedColor(initialColor);
    }
    if (product?.Size) {
      setSize(product.Size);
    }
  }, [initialColor, product?.Size]);

  useEffect(() => {
    setToggleColor(
      wishList.some((item) => item.ProductID === product.ProductID)
    );
  }, [wishList, product.ProductID]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
    console.log(selectedSize);
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleToggleColor = (product) => {
    if (toggleColor) {
      dispatch(removeFromWishList(product?.ProductID));
    } else {
      dispatch(setWishList(product));
    }
    setToggleColor(!toggleColor);
  };

  const handleRating = (value) => {
    console.log("value is:", value);
    setRating(value);
    setShowFilteredRating(true);
  };

  const filteredReviews = product?.ReviewList?.filter(
    (item) => item.Rating === rating
  );
  console.log("filtered are:", filteredReviews);
  const showReviews = showFilteredRating
    ? filteredReviews
    : product?.ReviewList;

  const handleReset = () => {
    setRating(0);
    setShowFilteredRating(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateDiscountedPrice = (price, discountValue, discountType) => {
    if (discountType === "Percent") {
      return price - (price * discountValue) / 100;
    } else if (discountType === "Exact") {
      return price - discountValue;
    } else {
      return price;
    }
  };

  const discountedPrice = calculateDiscountedPrice(
    product?.Price,
    product?.DiscountValue,
    product?.DiscountType
  );

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div style={{ height: "582px" }} className="col-12 col-md-4">
      <h3 className="font-weight-bold">{product?.Title}</h3>
      <div className="d-flex gap-3">
        <h4 style={{ textDecoration: "line-through" }}>
          ${numberFormatter.format(product?.Price)}
        </h4>
        <h4>${numberFormatter.format(discountedPrice)}</h4>
      </div>
      <div className="d-flex gap-2">
        <Rating
          readonly
          style={{ maxWidth: 180, fontSize: "20px", marginTop: "-6px" }}
          value={rating}
          onChange={handleRating}
          initialRating={product?.AvgRating}
          emptySymbol={<CiStar />}
          fullSymbol={<FaStar style={{ color: "#FFBF00" }} />}
        />

        <p
          style={{ cursor: "pointer" }}
          onClick={handleShow}
          className="border-0 border-end pr-2 bg-white"
        >
          {product?.ReviewCount} Reviews
        </p>
        {product.ReviewCount > 0 && (
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement={"end"}
            style={{ width: "600px" }}
          >
            <Offcanvas.Header>
              <Offcanvas.Title className="w-100">
                <div className="border-1 rounded shadow p-3 d-flex justify-content-between align-items-center w-100">
                  <h4>Reviews</h4>
                  <Rating
                    readonly
                    style={{
                      maxWidth: 180,
                      fontSize: "30px",
                      marginTop: "-18px",
                    }}
                    value={rating}
                    onChange={handleRating}
                    initialRating={product?.AvgRating}
                    emptySymbol={<CiStar />}
                    fullSymbol={<FaStar style={{ color: "#FFBF00" }} />}
                  />

                  <h4>{product?.AvgRating.toFixed(2)}/5</h4>
                  <button className="bg-white border-0" onClick={handleClose}>
                    <IoMdClose style={{fontSize: "30px"}} />
                  </button>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex gap-5 justify-content-center align-items-center mb-5">
                <Rating
                  style={{
                    maxWidth: 180,
                    fontSize: "30px",
                    marginTop: "-10px",
                  }}
                  placeholderRating={rating}
                  placeholderSymbol={<FaStar style={{ color: "FFBF00" }} />}
                  onChange={handleRating}
                  emptySymbol={<CiStar />}
                  fullSymbol={<FaStar style={{ color: "#FFBF00" }} />}
                />
                <h4>{rating} Stars</h4>
                <button className="rounded border-0 py-1 px-2" style={{backgroundColor: "rgb(184, 43, 43)", color:"white"}} type="button" onClick={handleReset}>
                  Reset
                </button>
              </div>

              {showReviews?.map((review, index) => (
                <ReviewCard
                  name={review?.UserName}
                  description={review?.Comment}
                  individualRating={review?.Rating}
                />
              ))}
            </Offcanvas.Body>
          </Offcanvas>
        )}

        <p style={{ color: "#00FF66" }}>In Stock</p>
      </div>
      <div className="">
        <p>
          {showFullDescription
            ? product?.Description
            : truncateText(product?.Description, 50)}
          {product?.Description?.length > 50 && (
            <span
              style={{ color: "rgb(184, 43, 43)", cursor: "pointer" }}
              className="bg-white border-0"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? " View Less" : "View More"}
            </span>
          )}
        </p>
      </div>
      <hr></hr>
      <form className="d-flex flex-column gap-1">
        {/*colors*/}
        <div className="d-flex justify-content-start align-items-start gap-2">
          <div className="">
            <p style={{ fontSize: "20px" }}>Colors:</p>
          </div>
          <div className="">
            {product?.ColorList?.map((color) => (
              <button
                key={color.ColorID}
                onClick={() => handleColorChange(color.ColorCode)}
                type="button"
                className={`color-button ${
                  selectedColor === color.ColorCode
                    ? "selected"
                    : "not-selected"
                }`}
                style={{ backgroundColor: color.ColorCode }}
              ></button>
            ))}
          </div>
        </div>

        {/*size*/}
        <div className="d-flex align-items-start justify-content-start gap-2">
          <div>
            <p style={{ fontSize: "20px" }}>Size:</p>
          </div>
          <div className="d-flex gap-2">
            {sizes.map((sizeOption) => (
              <button
                style={{
                  backgroundColor:
                    size === sizeOption ? "rgb(184, 43, 43)" : "",
                  color: size === sizeOption ? "white" : "black",
                }}
                type="button"
                className="py-1 px-2 rounded border"
                onClick={() => {
                  handleSizeChange(sizeOption);
                }}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>

        <div className="d-flex flex-wrap flex-md-row align-items-start justify-ontent-start gap-2">
          <div class="btn-group">
            <button
              onClick={decrement}
              type="button"
              className="button-style btn border py-2 px-4"
            >
              -
            </button>
            <button type="button" className="btn border py-2 px-4">
              {quantity}
            </button>
            <button
              onClick={increment}
              type="button"
              className="button-style btn border py-2 px-4"
            >
              +
            </button>
          </div>
          <button
            className="border-0 px-4 py-2 rounded view mb-3"
            style={{
              width: "150px",
              backgroundColor: "rgb(184, 43, 43)",
              color: "white",
            }}
          >
            Buy Now
          </button>
          <button
            className="btn border"
            type="button"
            style={{
              color: toggleColor ? "#E07575" : "#E5E5E5",

              fontSize: "16px",
            }}
            onClick={() => handleToggleColor(product)}
          >
            <FaHeart />
          </button>
        </div>
      </form>

      <div className="d-flex flex-column p-2 mt-4 border border-secondary">
        <div className="d-flex border-bottom border-secondary gap-2 align-items-center">
          <img src={delivery} style={{ height: "40px" }} />
          <div>
            <p>Free Delivery</p>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <img src={returnIcon} style={{ height: "40px" }} />
          <div>
            <p>Return Delivery</p>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
