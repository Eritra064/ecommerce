import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ProductDetailImage = ({ product }) => {
  console.log(product)
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const URL = "http://192.168.114.231:4001/"

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === product?.ImagesList?.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log(index);
  };
  return (
    <div
      style={{ height: "36.375rem" }}
      className="d-flex flex-column flex-md-row col-12 col-md-8 gap-5"
    >
      <div className="d-flex justify-content-start align-items-center order-2 order-md-1 flex-row flex-md-column gap-2 position-relative col-md-2">
        {product?.ImagesList?.length>4 && <button
          style={{ width: "100%", outline: "none", backgroundColor: "transparent" }}
          className="position-absolute top-0 border-0"
          onClick={handlePrev}
        >
          <FaArrowUp />
        </button>}
        
        {product?.ImagesList?.map((image, index) => (
            <div
            key={image.ImageID}
              style={{
                border: "5px solid rgb(241, 240, 240)",
                cursor: "pointer",
                height: "8.75rem",
                width: "8.75rem"
              }}
              onClick={() => {
                handleImageClick(currentIndex + index);
              }}
              className="d-flex justify-content-center align-items-center p-2"
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={URL+image.ImageURL}
              />
            </div>
          ))}
        {product.ImagesList?.length>4 && <button
          style={{ width: "100%", outline: "none", backgroundColor: "transparent" }}
          className="position-absolute bottom-0 border-0"
          onClick={handleNext}
        >
          <FaArrowDown />
        </button>}
        
      </div>
      <div
        // style={{ backgroundColor: "rgb(241, 240, 240)" }}
        style={{border: "5px solid rgb(241, 240, 240)"}}
        className="d-flex justify-content-center align-items-center col-md-9 order-1 order-md-2 p-5"
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={URL+product?.ImagesList?.[selectedImage]?.ImageURL}
          className=""
        />
      </div>
    </div>
  );
};

export default ProductDetailImage;
