import React, { useState, useContext } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./signup.css";
import { Auth } from "aws-amplify";
import { AuthContext } from "../../AuthContext";
import { LoaderButton } from "../LoaderButton";
import { SignUpForm } from "./SignUpForm";
import { ConfirmationForm } from "./ConfirmationForm";

export const SignUp = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [newUser, setNewUser] = useState(null);

  const validateConfirmationForm = () => {
    // dummy validation
    return confirmationCode.length > 0;
  };

  const handleSubmit = async (email, password) => {
    try {
      setNewUser("test");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="Login">
      {newUser ? (
        <ConfirmationForm />
      ) : (
        <SignUpForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};
