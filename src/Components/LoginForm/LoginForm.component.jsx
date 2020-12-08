import React from "react";

import "./LoginForm.style.scss";

const LoginForm = () => {
  return (
    <div>
      <form className="loginForm">
        <label>UserName</label>
        <input type="text" name="username"></input>
        <label>Password</label>
        <input type="password" name="password"></input>
      </form>
    </div>
  );
};

export default LoginForm;
