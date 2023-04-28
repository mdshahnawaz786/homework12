import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h3>NAVBAR</h3>
      </Link>
      <Link to="/home">
        <h3>HOME</h3>
      </Link>
      <Link to="/product">
        <h3>PRODUCT</h3>
      </Link>
    </div>
  );
};

export default Navbar;
