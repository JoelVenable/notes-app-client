import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import './home.css';
import { LoaderButton } from "./LoaderButton";

export const Home = () => (
  <div className="Home">
    <div className="Lander">
      <h1>Scratch</h1>
      <p>A simple note taking app</p>
      <LinkContainer to="/notes/add">
        <LoaderButton block bsSize="lg" text="Add a Note" />
      </LinkContainer>
    </div>
  </div>
);
