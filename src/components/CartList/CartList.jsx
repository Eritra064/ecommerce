import { useSelector } from "react-redux";
import "../../assets/css/cartlist.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const CartList = () => {
  const cartList = useSelector((state) => state.product.cartList);
  console.log(cartList);
  const URL = "http://192.168.114.231:4001/"

  const initialQuantities = cartList.reduce((acc, product) => {
    acc[product.id] = 1; 
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);

  const increment = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  const decrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] > 1 ? prevQuantities[productId] - 1 : 1
    }));
  };
  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-center align-items-center cartlist p-3">
          <div className="w-25 d-flex justify-content-center align-items-center">
            <p>Product</p>
          </div>
          <div className="w-25 d-flex justify-content-center align-items-center">
            <p>Price</p>
          </div>
          <div className="w-25 d-flex justify-content-center align-items-center">
            <p>Quantity</p>
          </div>
          <div className="w-25 d-flex justify-content-center align-items-center">
            <p>Subtotal</p>
          </div>
        </div>

        {cartList.map((product, index) =>  (
          <div key={product.id} className="d-flex justify-content-center align-items-center cartlist p-3">
            <div className="w-25 d-flex justify-content-center align-items-center gap-2">
              <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: "40px" }} src={URL+product?.ImageURL} />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <p>{product?.Title}</p>
              </div>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <p>{product?.Price}</p>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <div className="d-flex border rounded justify-content-center align-items-center">
                <div className="d-flex"><button className="bg-white border-0">{quantities[product.id]}</button></div>
                <div className="d-flex flex-column">
                  <button onClick={() => increment(product.id)} className="border-0 bg-white">
                    <MdOutlineKeyboardArrowUp />
                  </button>
                  <button onClick={() => decrement(product.id)} className="border-0 bg-white">
                    <MdOutlineKeyboardArrowDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <p>{(parseFloat(product?.Price) * quantities[product.id])}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
