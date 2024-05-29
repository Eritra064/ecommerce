import { useParams, useLocation } from "react-router-dom";
import ProductDetailImage from "./ProductDetailComponents/ProductDetailImage";
import ProductDetailDescription from "./ProductDetailComponents/ProductDetailDescription";
import RelatedItem from "./ProductDetailComponents/RelatedItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductDetailRequest } from "../../APIRequest/ProductDetail";


const ProductDetail = () => {
//   const location = useLocation();
const { productId } = useParams();

useEffect(() => {
    (async () => {
        await ProductDetailRequest(productId);
    })();
}, [productId]);

const product = useSelector((state) => state.product.productDetails)



//   const { product } = location.state;
    return ( 
        <div className="container mx-auto row mt-5 mb-5">
            
            <div className="d-flex gap-2 ml-3">
                <Link style={{textDecoration: "none", color: "black"}} to="/"><p>Home</p></Link>
                <p>/</p>
                <Link style={{textDecoration: "none", color: "black"}} to={`/category/${product?.CategoryID}`}><p>{product.Tags}</p></Link>
                <p>/</p>
                <p className="font-weight-bold">{product.Title}</p>
            </div>
            <div style={{marginBottom: "100px", marginTop: "50px"}} className="d-flex flex-column flex-md-row align-items-start gap-3">
                <ProductDetailImage product={product} />
                <ProductDetailDescription product={product} />
            </div>
            <RelatedItem product={product} />
             
        </div>
     );
}
 
export default ProductDetail;