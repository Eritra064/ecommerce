import footer from "../../assets/images/footer.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-white pt-5 mb-0 bottom-0">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Exclusive
              </h6>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <MDBInput
                type="text"
                id="form5Example2"
                label="Email address"
                className="text-white"
              />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Account</h6>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  My Account
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Login / Register
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Cart
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Wishlist
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Shop
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Link</h6>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Terms Of Use
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  FAQ
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Download App</h6>
              <p>Save $3 with App New User Only</p>
              <p>
                <img src={footer} />
              </p>
              <div className="d-flex">
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="github" />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
