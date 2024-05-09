import React from "react";
import Card from "react-bootstrap/Card";
import Products from "./Products";
import "../../../assets/css/productcard.css";
import wishlist from "../../../assets/images/Wishlist.png";
import eye from "../../../assets/images/eye.png";

const ProductCards = () => {
  return (
    <div className="row mt-5 mx-auto col-9">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Today's</p>
      </div>
      <h1 className="font-weight-bold">Flash Sales</h1>
      {Products.map((product) => (
        <div key={product.id} className="col-3 mb-4">
          <Card className="border-0">
            <div className="custom-background p-5">
              <Card.Img variant="top" src={product.image} />
              <div className="add-to-cart"><button>Add to cart</button></div>
            </div>
            <div className="custom d-flex flex-column">
              <button className="border-0">
                <img src={wishlist} />
              </button>
              <button className="border-0">
                <img src={eye} />
              </button>
            </div>
            <div className="custom-2 rounded">
              <p className="ml-2">{product.sale}</p>
            </div>
            <Card.Body className="">
              <Card.Title>{product.name}</Card.Title>

              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
