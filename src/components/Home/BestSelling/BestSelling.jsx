import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import wishlist from "../../../assets/images/Wishlist.png";
import eye from "../../../assets/images/eye.png";
import BestSellingProducts from "./BestSellingProducts";
import { setBestSelling } from "../../../redux/state-slice/bestSellingSlice";
import CustomCard from "../../../helper/CustomCard";

const BestSelling = () => {
  const bestSellingProducts = useSelector(
    (state) => state.bestSelling.bestSellingProducts
  );
  const dispatch = useDispatch();

  const [showAllProducts, setShowAllProducts] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(setBestSelling(BestSellingProducts));
  }, []);

  return (
    <div className="row mt-5 mx-auto container mb-5">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">This Month</p>
      </div>
      <div className="d-flex mb-3 align-items-center">
        <h1 className="font-weight-bold">Best Selling Products</h1>
        <button
          className="border-0 p-3 rounded ml-auto view"
          onClick={() => {
            setShowAllProducts(!showAllProducts);
          }}
          style={{
            width: "200px",
            backgroundColor: "rgb(184, 43, 43)",
            color: "white",
          }}
        >
          {showAllProducts ? "View Less" : "View All"}
        </button>
      </div>

      {showAllProducts
        ? bestSellingProducts.map((product) => (
            <div key={product.id} className="col-3 mb-4">
              <CustomCard
                image={product.image}
                wishlistSrc={wishlist}
                eyeSrc={eye}
                sale={product.sale}
                name={product.name}
                price={product.price}
              />
            </div>
          ))
        : bestSellingProducts
            .slice(startIndex, startIndex + 4)
            .map((product) => (
              <div key={product.id} className="col-3 mb-4">
                <CustomCard
                  image={product.image}
                  wishlistSrc={wishlist}
                  eyeSrc={eye}
                  sale={product.sale}
                  name={product.name}
                  price={product.price}
                />
              </div>
            ))}
    </div>
  );
};

export default BestSelling;
