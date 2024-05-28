import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setCartList, setWishList } from "../redux/state-slice/productSlice";
import { useDispatch } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const CustomCard = ({ product, remove }) => {
  const URL = "http://192.168.114.231:4001/" + product?.ImageURL;
  const dispatch = useDispatch();
  const [toggleColor, setToggleColor] = useState(false);
  const handleToggleColor = (product) => {
    setToggleColor(!toggleColor);
    dispatch(setWishList(product));
  };

  const addToCart = (product) => {
    dispatch(setCartList(product));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card style={{border: "5px solid rgb(241, 240, 240)"}} className="border-0">
      <div style={{ height: "246px" }} className="p-5 custom-background border-bottom">
        <Link
          style={{ textDecoration: "none" }}
          to={`/product/${product?.ProductID}`}
        >
          <Card.Img variant="top" src={URL} style={{height: "100%", width: "100%", objectFit:"contain"}} />
        </Link>

        <div className="add-to-cart">
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
      <div className="custom d-flex flex-column">
        {remove ? (
          <button
            className="border-0"
            style={{ fontSize: "30px" }}
            type="button"
          >
            <RiDeleteBin6Line />
          </button>
        ) : (
          <button
            type="button"
            style={{
              color: toggleColor ? "#E07575" : "#E5E5E5",
              fontSize: "30px",
            }}
            onClick={() => handleToggleColor(product)}
            className="border-0 bg-white"
          >
            <FaHeart />
          </button>
        )}

        {/* <button className="border-0">
          <img src={eyeSrc} />
        </button> */}
      </div>

      <div className="custom-2 rounded">
        <p className="ml-2">
          {product?.DiscountValue}
          {product?.DiscountType == "Percent" ? "%" : "$"}
        </p>
      </div>

      <Card.Body className="">
        {product?.Title.length > 20 ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${product?.ProductID}`}>
                {product?.Title}
              </Tooltip>
            }
          >
            <Card.Title>{truncateText(product?.Title, 20)}</Card.Title>
          </OverlayTrigger>
        ) : (
          <Card.Title>{product?.Title}</Card.Title>
        )}

        <Card.Text>${product?.Price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
