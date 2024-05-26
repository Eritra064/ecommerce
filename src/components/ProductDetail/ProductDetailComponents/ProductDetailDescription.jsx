import { useState } from "react";
import "../../../assets/css/productdetail.css";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import returnIcon from "../../../assets/images/return.png";
import delivery from "../../../assets/images/delivery.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReviewCard from "../../../helper/ReviewCard";

const ProductDetailDescription = ({ product }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedColor, setSelectedColor] = useState("#A0BCE0");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [toggleColor, setToggleColor] = useState(false);
  const [show, setShow] = useState(false);

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

  const handleToggleColor = () => {
    setToggleColor(!toggleColor);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ height: "582px" }} className="col-12 col-md-4">
      <h3 className="font-weight-bold">{product.name}</h3>
      <h4>{product.price}</h4>
      <div className="d-flex justify-content-start align-items-center gap-2">
        <div className="d-flex">
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
        <div className="d-flex justify-content-start align-items-start">
          <p
            style={{ cursor: "pointer" }}
            onClick={handleShow}
            className="border-0 border-end pr-2 bg-white"
          >
            (150 Reviews)
          </p>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement={"end"}
            style={{ width: "600px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="w-100">
                <div className="border-1 rounded shadow p-3 d-flex justify-content-between align-items-center w-100">
                  <h4>Reviews</h4>
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
                    <p>4/5</p>
                    <p>(150 Reviews)</p>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <p>
                  <FaStar style={{ color: "#FFAD33", fontSize: "30px" }} />
                </p>
                <p>
                  <FaStar style={{ color: "#FFAD33", fontSize: "30px" }} />
                </p>
                <p>
                  <FaStar style={{ color: "#FFAD33", fontSize: "30px" }} />
                </p>
                <p>
                  <FaStar style={{ color: "#FFAD33", fontSize: "30px" }} />
                </p>
                <p>
                  <FaStar style={{ color: "rgb(241, 240, 240)", fontSize: "30px" }} />
                </p>
                <p style={{fontSize: "30px"}}>4 Stars</p>
              </div>
              {product.reviews.map((review, index) => (
                
                <ReviewCard name={review.name} description={review.description} />
              ))}
              
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div>
          <p style={{ color: "#00FF66" }}>In Stock</p>
        </div>
      </div>
      <p>
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      <hr></hr>
      <form className="d-flex flex-column gap-1">
        {/*colors*/}
        <div className="d-flex justify-content-start align-items-start gap-2">
          <div className="">
            <p style={{ fontSize: "20px" }}>Colors:</p>
          </div>
          <div className="">
            <button
              onClick={() => {
                handleColorChange("#A0BCE0");
              }}
              type="button"
              className={`color-button1 ${
                selectedColor === "#A0BCE0" ? "selected" : "not-selected"
              }`}
            ></button>
            <button
              onClick={() => {
                handleColorChange("#E07575");
              }}
              type="button"
              className={`color-button2 ${
                selectedColor === "#E07575" ? "selected" : "not-selected"
              }`}
            ></button>
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

        <div className="d-flex align-items-start justify-ontent-start gap-2">
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
            onClick={() => handleToggleColor()}
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
