import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setCartList, setWishList } from "../redux/state-slice/productSlice";
import { useDispatch } from "react-redux";
const CustomCard = ({
  product, remove
}) => {
  
  const dispatch = useDispatch();
  const [toggleColor, setToggleColor] = useState(false);
  const handleToggleColor = (product) => {
    setToggleColor(!toggleColor);
    dispatch(setWishList(product));
  };

  const addToCart = (product) => {
    dispatch(setCartList(product));
  };

  return (
    <Card className="border-0">
      <div style={{ height: "246px" }} className="custom-background p-5">
        <Link style={{ textDecoration: "none" }} to={`/product/${product?.ProductID}`}><Card.Img variant="top" src={product?.ImageURL} /></Link>
        
        <div className="add-to-cart">
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
      <div className="custom d-flex flex-column">
        {remove ? (
          <button className="border-0" style={{ fontSize: "30px" }} type="button">
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
            className="border-0"
          >
            <FaHeart />
          </button>
        )}

        {/* <button className="border-0">
          <img src={eyeSrc} />
        </button> */}
      </div>

      <div className="custom-2 rounded">
        <p className="ml-2">{product?.DiscountValue}%</p>
      </div>

      <Card.Body className="">
        <Card.Title>{product?.Title}</Card.Title>

        <Card.Text>${product?.Price}</Card.Text>
      </Card.Body>
    </Card>
    
  );
};

export default CustomCard;
