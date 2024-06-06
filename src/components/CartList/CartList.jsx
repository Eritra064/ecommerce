import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/cartlist.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { removeFromCartList } from "../../redux/state-slice/productSlice";
import IndividualProduct from "./IndividualProduct";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartList = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.product.cartList);
  const totalPrice = cartList.reduce(
    (total, product) => total + product?.subTotal,
    0
  );
  console.log(cartList);

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
          <div className="w-25 d-flex justify-content-center align-items-center">
            <p>Remove from Cart</p>
          </div>
        </div>

        {cartList.map((product, index) => (
          <IndividualProduct key={index} product={product} />
        ))}
      </div>

      <div className="d-flex justify-content-between mt-5">
        <button className="bg-white px-5 py-3 border font-weight-bold">Return To Shop</button>
        <button className="bg-white px-5 py-3 border font-weight-bold">Update Cart</button>
      </div>
      <div className="d-flex justify-content-between align-items-start mt-5">
        <div style={{ width: "40%" }} className="buttons d-flex gap-2">
          <button
            style={{ color: "#7D8184", width: "300px" }}
            className="bg-white border py-3"
          >
            Coupon Code
          </button>
          <button
            style={{ backgroundColor: "#DB4444", color: "white" }}
            className="border-0 px-5 py-3 rounded"
          >
            Apply Coupon
          </button>
        </div>
        <div style={{ width: "30%" }} className="cart p-4 d-flex flex-column gap-1 rounded">
          <h5 className="font-weight-bold">Cart Total</h5>
          <div className="d-flex justify-content-between">
            <p>Subtotal:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div
            className=""
            style={{ height: "1px", backgroundColor: "#7D8184" }}
          ></div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div
            className=""
            style={{ height: "1px", backgroundColor: "#7D8184" }}
          ></div>

          <div className="d-flex justify-content-between">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/billing" style={{textDecoration: "none"}}><button
              className="px-5 py-3 border-0 rounded"
              style={{ backgroundColor: "#DB4444", color: "white" }}
            >
              Procees to checkout
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
