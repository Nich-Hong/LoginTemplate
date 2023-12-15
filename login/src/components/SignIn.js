import React from "react";
import { useState } from "react";
import BasicForm from "./BasicForm";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = {
      username,
      password,
    };
    fetch(`${URL}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      });
  };
  return (
    <div>
      <BasicForm
        setPassword={setPassword}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
      />
      <Link to="/SignUp">Sign Up</Link>
    </div>
  );
};

export default SignIn;
