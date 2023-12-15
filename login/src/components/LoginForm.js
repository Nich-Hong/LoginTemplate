import React from "react";
import { useState } from "react";

const URL = "http://localhost:5000";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    const user = {
      username,
      password,
    };
    fetch(`${URL}/login`, {
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
      <div>
        Username
        <input type="text" onChange={handleUsername} />
      </div>
      <div>
        Password
        <input type="text" onChange={handlePassword} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
