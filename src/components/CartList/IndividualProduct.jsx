import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/cartlist.css";
import { removeFromCartList, updateProductQuantities } from "../../redux/state-slice/productSlice";

const IndividualProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(product?.quantities);


  const increment = () => {
    const newQuantity = quantities + 1;
    setQuantities(newQuantity);
    dispatch(updateProductQuantities({ productId: product?.ProductID, quantities: newQuantity }));
  };

  const decrement = () => {
    if (quantities > 1) {
      const newQuantity = quantities - 1;
      setQuantities(newQuantity);
      dispatch(updateProductQuantities({ productId: product?.ProductID, quantities: newQuantity }));
    }
  };
  
  const URL = "http://192.168.114.231:4001/";
  const handleremoveFromCartList = (productId) => {
    dispatch(removeFromCartList(productId));
  };


  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });


  
  return (
    <div>
    <div
      key={product.id}
      className="d-flex justify-content-center align-items-center cartlist p-3"
    >
      <div className="w-25 d-flex justify-content-center align-items-center gap-2">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ width: "40px" }} src={URL + product?.ImageURL} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>{product?.Title}</p>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-center align-items-center">
        <p>${numberFormatter.format(product?.initialPrice)}</p>
      </div>
      <div className="w-25 d-flex justify-content-center align-items-center">
        <div className="d-flex border rounded justify-content-center align-items-center">
          <div className="d-flex">
            <button className="bg-white border-0">
              {quantities}
            </button>
          </div>
          <div className="d-flex flex-column">
            <button onClick={increment} className="border-0 bg-white">
              <MdOutlineKeyboardArrowUp />
            </button>
            <button onClick={decrement} className="border-0 bg-white">
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-center align-items-center">
        <p>${numberFormatter.format(product?.subTotal)}</p>
      </div>
      <div className="w-25 d-flex justify-content-center align-items-center">
        <button
          className="bg-white border-0"
          onClick={() => handleremoveFromCartList(product?.ProductID)}
        >
          <RiDeleteBin6Line style={{ fontSize: "20px" }} />
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default IndividualProduct;
