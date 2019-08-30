import React, { useState, useContext } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { Auth } from "aws-amplify";
import { AuthContext } from "../../AuthContext";
import { LoaderButton } from "../LoaderButton";

export const Login = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState();
  const [loading, setLoading] = useState(false);

  const validateForm = () => email.length > 0 && password.length > 0;

  const handleChange = e => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    setDisabled(!validateForm());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await Auth.signIn(email, password);
      setLoggedIn();
    } catch (e) {
      setLoading(false);
      alert(e);
    }
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
          <FormControl
            type="password"
            value={password}
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
    </div>
  );
};
