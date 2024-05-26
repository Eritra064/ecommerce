import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ProductDetailImage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log(index);
  };
  return (
    <div
      style={{ height: "36.375rem" }}
      className="d-flex flex-column flex-md-row col-12 col-md-8 gap-2"
    >
      <div className="d-flex justify-content-center align-items-center order-2 order-md-1 flex-row flex-md-column gap-2 position-relative">
        <button
          style={{ width: "100%", outline: "none", backgroundColor: "transparent" }}
          className="position-absolute top-0 border-0"
          onClick={handlePrev}
        >
          <FaArrowUp />
        </button>
        {product.ImagesList.map((image, index) => (
            <div
              style={{
                backgroundColor: "rgb(241, 240, 240)",
                cursor: "pointer",
                height: "8.75rem",
              }}
              onClick={() => {
                handleImageClick(currentIndex + index);
              }}
              className="d-flex justify-content-center align-items-center p-2"
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={image.ImageURL}
              />
            </div>
          ))}

        <button
          style={{ width: "100%", outline: "none", backgroundColor: "transparent" }}
          className="position-absolute bottom-0 border-0"
          onClick={handleNext}
        >
          <FaArrowDown />
        </button>
      </div>
      <div
        style={{ backgroundColor: "rgb(241, 240, 240)" }}
        className="d-flex justify-content-center align-items-center order-1 order-md-2 p-5"
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={product.images[selectedImage]}
          className=""
        />
      </div>
    </div>
  );
};

export default ProductDetailImage;
