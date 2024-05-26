import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import "../../assets/css/navbarpanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import wishlist from "../../assets/images/Wishlist.png";
import cart from "../../assets/images/cart-icon.png";
import Dropdown from 'react-bootstrap/Dropdown';
import user from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { RxPerson } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { logout } from "../../redux/state-slice/authSlice";
import { useDispatch } from "react-redux";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Topbar() {
  const cartList = useSelector((state) => state.product.cartList)
  const wishList = useSelector((state) => state.product.wishList)
  const storedToken = localStorage.getItem('token')
  console.log(storedToken);

  const handleLogout = () => {
    store.dispatch(logout());
    window.location.reload();
  }
  
  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="border-bottom sticky-top bg-white"
    >
      <Container>
        <Navbar.Brand className="navbar-brand font-weight-bold" href="/">
          Exclusive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link className="menu" href="/">
              Home
            </Nav.Link>

            <Nav.Link className="mx-5 menu" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="menu" href="/about">
              About
            </Nav.Link>
            {!storedToken && (<Nav.Link className="mx-5 menu" href="/signup">
              Sign Up
            </Nav.Link>)}
            
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
            <Link style={{textDecoration: "none"}} to="/wishlist"><div><img src={wishlist} /><sup className="superscript">{wishList.length}</sup></div></Link>
            
            <Link style={{textDecoration: "none"}} to="/cart"><div><img src={cart} /><sup className="superscript">{cartList.length}</sup></div></Link>
          </Nav>
          {storedToken && (
            <Dropdown classname="">
            <Dropdown.Toggle className="bg-white border-0 shadow-none">
              <img src={user} />
            </Dropdown.Toggle>
      
            <Dropdown.Menu classname="dropdown-background">
              <Dropdown.Item href="#/action-1"><RxPerson className="mr-2" />Manage My Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2"><FiShoppingBag className="mr-2"/>My Order</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><MdOutlineCancel className="mr-2"/>My Cancellations</Dropdown.Item>
              <Dropdown.Item href="#/action-3"><FaRegStar className="mr-2"/>My Reviews</Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={handleLogout}><TbLogout2 className="mr-2" />Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
