import React, { useState, useContext } from "react";
import "./signup.css";
import { AuthContext } from "../../AuthContext";
import { SignUpForm } from "./SignUpForm";
import { ConfirmationForm } from "./ConfirmationForm";
import { Auth } from "aws-amplify";

export const SignUp = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [newUser, setNewUser] = useState(null);
  const [cred, setCred] = useState(null);

  const handleSubmit = async (username, password) => {
    try {
      setCred({ username, password });
      const newUser = await Auth.signUp({
        username,
        password
      });
      setNewUser(newUser);
    } catch (e) {
      alert(e);
    }
  };

  const handleConfirm = async code => {
    try {
      await Auth.confirmSignUp(cred.username, code);
      await Auth.signIn(cred.username, cred.password);
      setLoggedIn();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="Signup">
      {newUser ? (
        <ConfirmationForm handleConfirm={handleConfirm} />
      ) : (
        <SignUpForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};
