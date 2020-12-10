import React, { useState } from "react";

import "./LoginForm.style.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange_username = (e) => {
    setUsername(e.target.value);
  };

  const handleChange_password = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="loginForm">
        <label>UserName</label>
        <input
          type="text"
          name="username"
          onChange={handleChange_username}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange_password}
        ></input>
        <br />
        <input type="submit" value="send" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default LoginForm;
