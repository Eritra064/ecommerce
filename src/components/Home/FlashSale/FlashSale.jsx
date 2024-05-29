import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../../../assets/css/productcard.css";
import wishlist from "../../../assets/images/Wishlist.png";
import eye from "../../../assets/images/eye.png";
import { FaHeart } from "react-icons/fa";
import Timer from "../../../helper/Timer";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import productSlice, {
  setProductList,
  setCartList,
} from "../../../redux/state-slice/productSlice";
import CustomCard from "../../../helper/CustomCard";
import store from "../../../redux/store";
import { productRequest } from "../../../APIRequest/Products";

const FlashSale = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // await FlashSaleListRequest();
      const data = await productRequest(7);
      store.dispatch(setProductList(data));
    })();
  }, [7]);

  const products = useSelector((state) => state.product.products);

  const [showAllProducts, setShowAllProducts] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex <= products.length - 4) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const addToCart = (product) => {
    dispatch(setCartList(product));
  };

  return (
    <div className="row mt-5 mx-auto container mb-5">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Today's</p>
      </div>
      <div className="d-flex align-items-center">
        <h1 className="font-weight-bold">Flash Sales</h1>
        <Timer />
        <div className="ml-auto">
          <button className="border-0 rounded-circle mr-2" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="border-0 rounded-circle" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      {products.slice(startIndex, startIndex + 4).map((product, index) => (
        <div key={product.id} className="col-3 mb-4">
          <CustomCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FlashSale;
