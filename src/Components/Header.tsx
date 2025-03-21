import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import CartIcon from "../Icons/CartIcon";
import LogoIcon from "../Icons/LogoIcon";
import { Outlet, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export const Header = () => {
  const { itemCount } = useCart();

  return (
    <>
      <HeaderContainer>
        <div className="logo-container">
          <span className="logo-icon">
            <LogoIcon />
          </span>
          <Navbar.Brand href="/">
            <span className="header-logo">Xolitude Photography</span>
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="justify-content-end">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <CartLink to="/cart" className="nav-link">
              <CartIcon />
              {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
            </CartLink>
          </Nav>
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

const HeaderContainer = styled.div`
  padding: 2vh 2vw;
  background-color: #eeeeee;
  min-height: 120px;
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 2vh 0;
  }
  .logo {
    height: 45px;
    padding: 0 2vw;
  }
  .logo-icon {
    padding: 0 15px;
  }

  .header-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #252525;
    font-family: "Tenor Sans", sans-serif;
  }
  a:hover {
    color: #252525;
  }
  .nav-link:visited {
    color: #252525;
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #2d3793;
  color: white;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  min-width: 1.5rem;
  text-align: center;
  font-weight: bold;
`;
