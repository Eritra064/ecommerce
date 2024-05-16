import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setProductList } from "../../../redux/state-slice/productSlice";
import Products from "../../Home/Product/Products";
import CustomCard from "../../../helper/CustomCard";
import { Link } from "react-router-dom";
import wishlist from "../../../assets/images/Wishlist.png";
import eye from "../../../assets/images/eye.png"

const RelatedItem = ({product}) => {
  const [startIndex, setStartIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductList(Products));
  }, []);
  const products = useSelector((state) => state.product.products);
  const relatedProducts = products.filter((item)=>item.category===product.category);
  console.log(relatedProducts);
  return (
    <div style={{marginTop: "150px"}}>
        <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Related Items</p>
      </div>
    <div className="d-flex align-items-center">
        {relatedProducts.slice(startIndex, startIndex + 4).map((product) => (
        
        <div key={product.id} className="col-3 mb-4">
          <Link style={{ textDecoration: "none" }} state={{product:product}} to={`/product/${product.id}`}>
          <CustomCard
          image={product.images[0]}
          wishlistSrc={wishlist}
          eyeSrc={eye}
          sale={product.sale}
          name={product.name}
          price={product.price}
          isDiscounted
          
           />
           </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RelatedItem;
