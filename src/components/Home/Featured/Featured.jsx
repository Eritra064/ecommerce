import playstation from "../../../assets/images/playstation.png"
import women from "../../../assets/images/women.png"
import speaker from "../../../assets/images/speaker.png"
import perfume from "../../../assets/images/perfume.png"
import service1 from "../../../assets/images/service1.png"
import service2 from "../../../assets/images/service2.png"
import service3 from "../../../assets/images/service3.png"

const Featured = () => {
  const features = [
    {
      image: service1,
      name: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      image: service2,
      name: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      image: service3,
      name: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ]
  return (
    <div className="row mt-5 mx-auto container mb-5">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Featured</p>
      </div>
      <div className="d-flex mb-3">
        <h1 className="font-weight-bold">New Arrival</h1>
      </div>
      <div className="d-flex justify-content-between">
        <img src={playstation} />
        <div className="d-flex flex-column justify-content-center">
          <img src={women} />
          <div className="d-flex mt-5">
            <img src={speaker} />
            <img src={perfume} className="ml-5" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mt-5">
        {features.map((feature) => (
          <div className="d-flex flex-column align-items-center">
            <img src={feature.image} style={{height: "50px", width: "50px"}} />
            <p className="font-weight-bold mt-2">{feature.name}</p>
            <p className="fonnt-weight-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
