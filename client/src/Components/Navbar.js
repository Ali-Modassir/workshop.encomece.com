import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

//Brand logo
import BrandLogo from "../assets/img/logo.png";

const Navbar1 = ({ fixed }) => {
  const [show, handleShow] = useState(fixed);
  const [mobileView, setmobileView] = useState(false);
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
        window.removeEventListener("scroll", () => {
          handleShow(true);
        });
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        console.log(window.innerWidth);
        setmobileView(true);
      } else {
        setmobileView(false);
      }
      return () => window.removeEventListener("resize");
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      {...(!mobileView ? { fixed: "top" } : { sticky: "top" })}
      className={`NavbarCont ${show && "bg-nav"} `}
    >
      <Navbar.Brand href="/" className="ml-5">
        <img src={BrandLogo} className="brand-logo" alt="Encomece" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey="/" className="ml-auto mr-5 pr-5">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/programs">Programs</Nav.Link>
          <Nav.Link href="/team">Team</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/">Event</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
