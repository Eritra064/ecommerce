import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "../../../assets/css/categories.css";

import { FiCamera } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineHeadphones } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";

const Categories = () => {
    const icons = [
        
        {
            icon: IoIosPhonePortrait,
            text: "SmartPhone"
        },
        {
            icon: RiComputerLine,
            text: "Computer"
        },
        {
            icon: BsSmartwatch,
            text: "Smart Watch"
        },
        {
            icon: FiCamera,
            text: "Camera"
        },
        {
            icon: MdOutlineHeadphones,
            text: "HeadPhones"
        },
        {
            icon: SiFacebookgaming,
            text: "Gaming"
        },
        {
          icon: FiCamera,
          text: "Camera"
      },
      {
          icon: MdOutlineHeadphones,
          text: "HeadPhones"
      },
      {
          icon: SiFacebookgaming,
          text: "Gaming"
      },
        
    ]
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex <= icons.length - 6) {
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
      {icons.slice(startIndex, startIndex + 6).map(({ icon: Icon, text }) => (
            <div className="d-flex icon flex-column align-items-center rounded">
              <Icon className="iconcss mb-3" />
              <p className="icon-text">{text}</p>
            </div>
        ))}
      
      </div>
    </div>
  );
};

export default Categories;
