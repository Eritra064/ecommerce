import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CustomCard from "../../../helper/CustomCard";
import { relatedItemRequest } from "../../../APIRequest/RelatedItem";

const RelatedItem = ({ product }) => {
  
  const [startIndex, setStartIndex] = useState(0);
  console.log(product);

  const categoryId = product?.CategoryID;

  console.log("category id is:", categoryId);

  useEffect(() => {
    (async () => {
      await relatedItemRequest(categoryId);
    })();
  }, [categoryId]);


  const products = useSelector((state) => state.product.relatedItems)

  console.log("products are:",products)

  const relatedProducts = products.filter(
    (item) => item.Title != product.Title
  );
  console.log(relatedProducts);

  
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Related Items</p>
      </div>
      
      <div className="d-flex flex-wrap flex-md-row">
        {products.slice(0, 4).map((product,index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            <CustomCard product={product} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default RelatedItem;
