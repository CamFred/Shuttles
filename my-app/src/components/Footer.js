import React from "react";
//import "../css/Header.css"; // Import the CSS file
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const Footer = () => {
  return (
      <Navbar expand="lg" className="bg-primary navbar-dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Footer;
