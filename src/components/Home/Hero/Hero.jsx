import voucher from "../../../assets/images/voucher.png";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
const Hero = () => {
  return (
    <div className="row container d-flex mx-auto">
      <div className="hello col-3 border-end pt-5">
        <p>Women's Fashion</p>
        <p>Men's Fashion</p>
        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Women's Fashion</p>
      </div>
      <div className="images p-5 col-9">
        <MDBCarousel showIndicators>
          <MDBCarouselItem itemId={1}>
            <img src={voucher} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={voucher} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={voucher} />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    </div>
  );
};

export default Hero;
