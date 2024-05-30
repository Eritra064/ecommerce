import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  setCartList,
  setWishList,
  removeFromWishList,
} from "../redux/state-slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Swal from "sweetalert2";
const CustomCard = ({ product, remove }) => {
  const URL = "http://192.168.114.231:4001/" + product?.ImageURL;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.product.cartList);
  const wishList = useSelector((state) => state.product.wishList);
  const [toggleColor, setToggleColor] = useState(false);

  useEffect(() => {
    setToggleColor(wishList.some((item) => item.ProductID === product.ProductID));
  }, [wishList, product.ProductID]);

  const handleToggleColor = (product) => {
    if (toggleColor) {
      dispatch(removeFromWishList(product?.ProductID));
    } else {
      dispatch(setWishList(product));
    }
    setToggleColor(!toggleColor);
  };

  const addToCart = (product) => {
    const isInCart = cartList.some(
      (item) => item.ProductID === product?.ProductID
    );
    if (isInCart) {
      Swal.fire({
        title: "Already in Cart",
        text: "This product is already in the cart.",
        icon: "info",
      });
    } else {
      dispatch(setCartList(product));
    }
  };

  const handleRemoveFromWishList = (productId) => {
    dispatch(removeFromWishList(productId));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

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

  return (
    <Card
      style={{ border: "5px solid rgb(241, 240, 240)" }}
      className="border-0"
    >
      <div
        style={{ height: "246px" }}
        className="p-5 custom-background border-bottom"
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`/product/${product?.ProductID}`}
        >
          <Card.Img
            variant="top"
            src={URL}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Link>

        <div className="add-to-cart">
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
      <div className="custom d-flex flex-column">
        {remove ? (
          <button
            className="border-0 bg-white"
            style={{ fontSize: "30px" }}
            type="button"
            onClick={() => handleRemoveFromWishList(product?.ProductID)}
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
        <div className="d-flex flex-column flex-md-row gap-2">
          <Card.Text style={{ textDecoration: "line-through" }}>
            ${numberFormatter.format(product?.Price)}
          </Card.Text>
          <Card.Text>${numberFormatter.format(discountedPrice)}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
