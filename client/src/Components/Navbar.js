import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Brand logo
import BrandLogo from "../assets/img/logo.png";

const Navbar = ({ fixed }) => {
  const [show, handleShow] = useState(fixed);
  useEffect(() => {
    if (show) {
      return;
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }
  }, []);

  return (
    <nav
      className={`nav navbar  navbar-expand-lg fixed-top navbar-dark ${
        show && "bg-nav"
      }`}
    >
      <div className="container">
        <a className="navbar-brand mr-auto" to="#">
          <img src={BrandLogo} className="brand-logo" alt="Encomece" />
        </a>
        <button
          className="navbar-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#nav-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"></div>
        <div
          className="collapse navbar-collapse justify-content-end bg-nav2"
          id="nav-menu"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Event
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
