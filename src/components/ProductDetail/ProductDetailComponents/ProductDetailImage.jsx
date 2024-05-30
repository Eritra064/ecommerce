import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ProductDetailImage = ({ product }) => {
  console.log(product);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);
  const URL = "http://192.168.114.231:4001/";

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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{ height: "36.375rem" }}
      className="d-flex flex-column-reverse flex-lg-row col-12 col-md-8 gap-5"
    >
      <div className="position-relative w-responsive">
        <div className="d-flex justify-content-center align-items-center">
          {isSmallDevice ? (
            <div className="d-flex flex gap-4 overflow-x-auto">
              {product?.ImagesList?.map((image, index) => (
                // <div
                //   key={image.ImageID}
                //   style={{
                //     border: "5px solid rgb(241, 240, 240)",
                //     cursor: "pointer",
                //     height: "8.75rem",
                //     width: "8.75rem",
                //   }}
                //   onClick={() => {
                //     handleImageClick(currentIndex + index);
                //   }}
                //   className="d-flex justify-content-center align-items-center p-2"
                // >
                //   <img
                //     style={{
                //       height: "100%",
                //       width: "100%",
                //       objectFit: "contain",
                //     }}
                //     src={URL + image.ImageURL}
                //   />
                // </div>
                <img
                  style={{
                    border: "5px solid #F5F5F5",
                    padding: "6px",
                    cursor: "pointer",
                    height: "120px"
                  }}
                  src={URL + image.ImageURL}
                  onClick={() => handleImageClick(currentIndex + index)}

                />
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-start align-items-center flex-row flex-md-column gap-2 col-md-2">
              {product?.ImagesList?.length > 4 && (
                <button
                  style={{
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                  className="position-absolute top-0 border-0"
                  onClick={handlePrev}
                >
                  <FaArrowUp />
                </button>
              )}

              {product?.ImagesList?.map((image, index) => (
                <div
                  key={image.ImageID}
                  style={{
                    border: "5px solid rgb(241, 240, 240)",
                    cursor: "pointer",
                    height: "8.75rem",
                    width: "8.75rem",
                  }}
                  onClick={() => {
                    handleImageClick(currentIndex + index);
                  }}
                  className="d-flex justify-content-center align-items-center p-2"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={URL + image.ImageURL}
                  />
                </div>
              ))}
              {product.ImagesList?.length > 4 && (
                <button
                  style={{
                    width: "100%",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                  className="position-absolute bottom-0 border-0"
                  onClick={handleNext}
                >
                  <FaArrowDown />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        // style={{ backgroundColor: "rgb(241, 240, 240)" }}
        style={{ border: "5px solid rgb(241, 240, 240)" }}
        className="d-flex justify-content-center align-items-center col-md-9 order-1 order-md-2 p-5"
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={URL + product?.ImagesList?.[selectedImage]?.ImageURL}
          className=""
        />
      </div>
    </div>
  );
};

export default ProductDetailImage;
