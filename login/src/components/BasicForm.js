import React from "react";

const BasicForm = (props) => {
  const handleUsername = (e) => {
    props.setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    props.setPassword(e.target.value);
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
      <button type="submit" onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default BasicForm;
