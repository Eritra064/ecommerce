import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../../../assets/css/categories.css";
import { useSelector } from "react-redux";
import { FiCamera } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineHeadphones } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { CategoryListRequest } from "../../../APIRequest/Category";
import { Link } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    (async () => {
      await CategoryListRequest();
    })();
  }, []);

  const categories = useSelector((state) => state.category.categories);

  const icons = [
    {
      icon: IoIosPhonePortrait,
      text: "Phones",
    },
    {
      icon: RiComputerLine,
      text: "Computers",
    },
    {
      icon: BsSmartwatch,
      text: "SmartWatch",
    },
    {
      icon: FiCamera,
      text: "Camera",
    },
    {
      icon: MdOutlineHeadphones,
      text: "Headphones",
    },
    {
      icon: SiFacebookgaming,
      text: "Gaming",
    },
    {
      icon: MdDiscount,
      text: "Flash Sales"
    },
    {
      icon: BsCart4,
      text: "Best Selling Products"
    }
  ];

  const findIcon = (categoryName) => {
    const match = icons.find((iconObj) => iconObj.text === categoryName);
    return match ? match.icon : null;
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex <= categories.length - 6) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };
  return (
    <div className="row mt-5 mx-auto container mb-5">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Categories</p>
      </div>
      <div className="d-flex mb-3">
        <h1 className="font-weight-bold">Browse By Category</h1>
        <div className="ml-auto">
          <button className="border-0 rounded-circle mr-2" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="border-0 rounded-circle" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/*categories*/}
      <div className="d-flex justify-content-between">
        {categories.slice(startIndex, startIndex + 6).map((category) => {
          const IconComponent = findIcon(category?.CategoryName);
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/category/${category?.CategoryID}`}
            >
              <div
                className="d-flex icon flex-column align-items-center rounded"
                key={category?.CategoryName}
              >
                {IconComponent && <IconComponent className="iconcss mb-3" />}
                <p className="icon-text">{category?.CategoryName}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
