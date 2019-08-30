import React, { useState } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { LoaderButton } from "../LoaderButton";

export const SignUpForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const validateForm = () => {
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  };

  const formSubmit = e => {
    e.preventDefault();
    setLoading(true);

    await handleSubmit(email, password);
    setLoading(false);

  };

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    if (id === "confirmPassword") setConfirmPassword(value);
    setDisabled(!validateForm());
  };

  return (
    <form onSubmit={formSubmit}>
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
        <FormControl type="password" value={password} onChange={handleChange} />
      </FormGroup>
      <FormGroup controlId="confirmPassword" bsSize="Large">
        <ControlLabel>Confirm Password</ControlLabel>
        <FormControl
          type="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </FormGroup>
      <LoaderButton
        block
        bsSize="large"
        disabled={disabled}
        type="submit"
        isLoading={loading}
        text="Login"
        loadingText="Logging in..."
      />
    </form>
  );
};