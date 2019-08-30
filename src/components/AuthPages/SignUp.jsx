import React, { useState, useContext } from "react";
import "./signup.css";
// import { Auth } from "aws-amplify";
// import { AuthContext } from "../../AuthContext";
import { SignUpForm } from "./SignUpForm";
import { ConfirmationForm } from "./ConfirmationForm";

export const SignUp = () => {
  //const { setLoggedIn } = useContext(AuthContext);
  const [newUser, setNewUser] = useState(null);

  const handleSubmit = async (email, password) => {
    try {
      setNewUser("test");
    } catch (e) {
      alert(e);
    }
  };

  const handleConfirm = async () => {await };

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
