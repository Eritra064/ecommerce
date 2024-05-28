import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { categoryProductRequest } from "../../APIRequest/CategoryProducts";
import CustomCard from "../../helper/CustomCard";

const CategoryProducts = () => {
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        (async () => {
            await categoryProductRequest(categoryId);
        })();
    }, [categoryId]);

    const products = useSelector((state) => state.product.categoryProducts)
    console.log(products)

    return ( 
        <div className="mt-5 container mx-auto mb-5">
            <div className="d-flex flex-wrap">
            {products.map((product, index) => (
                <div key={product.id} className="col-3 mb-4">
                <CustomCard product={product} />
              </div>
            ))}
            </div>
        </div>
     );
}
 
export default CategoryProducts;