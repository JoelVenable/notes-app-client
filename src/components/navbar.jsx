import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyNavbar = () => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);
