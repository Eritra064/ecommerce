import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { categoryProductRequest } from "../../APIRequest/CategoryProducts";
import CustomCard from "../../helper/CustomCard";
import { Link } from "react-router-dom";
import PaginationComponent from "../../helper/PaginationComponent";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    (async () => {
      await categoryProductRequest(categoryId);
    })();
  }, [categoryId]);

  const products = useSelector((state) => state.product.categoryProducts);
  const categories = useSelector((state) => state.category.categories);
  const category = categories.find(
    (category) => String(category?.CategoryID) === categoryId
  );

  console.log(categories);
  console.log(products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-5 container mx-auto mb-5">
      <div className="d-flex gap-2 mb-5">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
        /
        <Link
          className="font-weight-bold"
          style={{ textDecoration: "none", color: "black" }}
          to={`/category/${categoryId}`}
        >
          {category?.CategoryName}
        </Link>
      </div>
      <div className="d-flex flex-wrap col-12">
        {currentProducts.map((product, index) => (
          <div key={product.id} className="col-3 mb-4">
            <CustomCard product={product} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      
    </div>
  );
};

export default CategoryProducts;
