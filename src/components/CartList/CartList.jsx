import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/cartlist.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { removeFromCartList } from "../../redux/state-slice/productSlice";
import IndividualProduct from "./IndividualProduct";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartList = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.product.cartList);

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
            <p>Subtotal</p>
          </div>
        </div>

        {cartList.map((product, index) => (
          <IndividualProduct key={index} product={product} />
        ))}
      </div>

      <div className="d-flex justify-content-between mt-5">
        <button className="bg-white px-5 py-3 border">Return To Shop</button>
        <button className="bg-white px-5 py-3 border">Update Cart</button>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <div className="d-flex gap-2">
          <button>Coupon Code</button>
          <button>Apply Coupon</button>
        </div>
        <div>
          <p>Total price</p>
        </div>
      </div>
    </div>
  );
};

export default CartList;
