/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./flyak.png";

const Navbar = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img alt="flyak" src={logo} width="112" height="28" />
        </a>
        <a
          className={`navbar-burger burger ${menuActive && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className={`navbar-menu ${menuActive && "is-active"}`}>
        <div className="navbar-start">
          <Link to="/flights" className="navbar-item">
            Flights
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">Welcome, {user.name}!</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
