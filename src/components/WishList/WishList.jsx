import CustomCard from "../../helper/CustomCard";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishlist = useSelector((state) => state.product.wishList);
  return (
    <div className=" mt-5 mb-5 container mx-auto d-flex flex-wrap gap-5 justify-content-center align-items-center">
      {wishlist.map((product, index) => (
        <div key={product.id} className="col-3 mb-4">
          <CustomCard product={product} remove />
        </div>
      ))}
    </div>
  );
};

export default WishList;
