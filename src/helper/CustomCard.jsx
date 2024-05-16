import Card from "react-bootstrap/Card";
const CustomCard = ({
  image,
  wishlistSrc,
  eyeSrc,
  sale,
  name,
  price,
  isDiscounted,
}) => {
  return (
    <Card className="border-0">
      <div style={{height: "246px"}} className="custom-background p-5">
        <Card.Img variant="top" src={image} />
        <div className="add-to-cart">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="custom d-flex flex-column">
        <button className="border-0">
          <img src={wishlistSrc} />
        </button>
        <button className="border-0">
          <img src={eyeSrc} />
        </button>
      </div>
      {isDiscounted && (
        <div className="custom-2 rounded">
          <p className="ml-2">{sale}</p>
        </div>
      )}
      <Card.Body className="">
        <Card.Title>{name}</Card.Title>

        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
