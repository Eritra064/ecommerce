import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import "../../assets/css/navbarpanel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import wishlist from "../../assets/images/Wishlist.png";
import cart from "../../assets/images/cart-icon.png";
import { NavLink } from "react-router-dom";

function Topbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="border-bottom sticky-top bg-white">
      <Container>
        
        <Navbar.Brand className="navbar-brand font-weight-bold" href="#home">
          Exclusive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link  className="menu" href="/">
              Home
            </Nav.Link>
            
            <Nav.Link className="mx-5 menu" href="/contact">Contact</Nav.Link>
            <Nav.Link className="menu" href="/about">About</Nav.Link>
            <Nav.Link className="mx-5 menu" href="/signup">Sign Up</Nav.Link>
          </Nav>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className="d-flex">
            <img src={wishlist} />
            <img src={cart} />
          </Nav>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
  );
}

export default Topbar;
