import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBootStrap,
} from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const Navbar = () => {
  const {openCart,cartQuantity} = useShoppingCart();

  return (
    <NavbarBootStrap sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {/* <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link> */}
          <Nav.Link id="store" as={NavLink} to="/store">
            Store
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle "
          style={{ fontSize: "20px", position: "relative" }}
          onClick={() => openCart()}
          id="buttonIcon"
        >
          <i className="cartIcon bi bi-cart3 " ></i>

          <div
            className="d-flex justify-content-center align-items-center bg-danger rounded-circle"
            style={{
              position: "absolute",
              color: "white",
              width: "20px",
              height: "20px",
              bottom: "0",
              right: "0",
              transform: "translate(25%,25%)",
              fontSize: "14px",
            }}
            id="quantityItem"
          >
           {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBootStrap>
  );
};

export default Navbar;
