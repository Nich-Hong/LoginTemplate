import React from "react";
import { useState } from "react";
import BasicForm from "./BasicForm";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const user = {
      username,
      password,
    };
    fetch(`${URL}/signup`, {
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
      <Link to="/">Sign In</Link>
    </div>
  );
};

export default SignUp;
