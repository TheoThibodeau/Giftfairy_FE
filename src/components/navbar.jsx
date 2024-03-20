import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import UserImage from "../images/userImage.png";
import Home from "../images/home3.png";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        {/* Home button navigation link */}
        <Link to="/" className="navbar-brand">
          <img src={Home} alt="Home" height={45} width={45} />
        </Link>
        {/* Title header across app */}
        <h2 className="titleHeader">
          giftf<i>ai</i>ry
        </h2>
        {/* Profile button navigation link */}
        <Link to="/profile">
          <img src={UserImage} alt="User Image" height={40} width={40} />
        </Link>
      </Navbar>
    </>
  );
}

export default NavBar;
