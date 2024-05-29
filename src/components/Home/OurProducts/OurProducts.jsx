import { useEffect, useState } from "react";
import { productRequest } from "../../../APIRequest/Products";
import { setAllProducts } from "../../../redux/state-slice/productSlice";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import CustomCard from "../../../helper/CustomCard";
import { Link } from "react-router-dom";

const OurProducts = () => {
  useEffect(() => {
    (async () => {
      const data = await productRequest(0);
      store.dispatch(setAllProducts(data));
    })();
  }, [0]);

  const [startIndex, setStartIndex] = useState(0);

  const products = useSelector((state) => state.product.allProducts);
  return (
    <div className="row mt-5 mx-auto container mb-5">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Our Products</p>
      </div>
      <div className="d-flex mb-3 align-items-center">
        <h1 className="font-weight-bold">Explore Our Products</h1>
        
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-wrap">
        {products.slice(startIndex, startIndex + 8).map((product, index) => (
          <div key={product.id} className="col-3 mb-4">
            <CustomCard product={product} />
          </div>
        ))}
        
      </div>
      <Link to="/category/0">
      <button
          className="border-0 p-3 rounded view mt-3"
          style={{
            width: "200px",
            backgroundColor: "rgb(184, 43, 43)",
            color: "white",
          }}
        >View All Products</button>
        </Link>
        </div>
    </div>
  );
};

export default OurProducts;
