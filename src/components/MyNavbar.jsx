import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="/signup">Signup</NavItem>
        <NavItem href="/login">Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
