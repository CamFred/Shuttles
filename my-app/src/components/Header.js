import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-primary">
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand className="" href="#home">Cosmia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink href="/navigation" active={location.pathname === '/navigation'}>Navigation</NavLink>
            <NavLink href="/engineering" active={location.pathname === '/engineering'}>Engineering</NavLink>
            <NavLink eventKey="disabled" disabled>Coms</NavLink>
            <NavLink eventKey="disabled" disabled>Cargo</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
