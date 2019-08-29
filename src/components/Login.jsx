import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="Large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="Large">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" value={email} onChange={handleChange} />
        </FormGroup>
        <Button block bsSize="large" disabled={validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
