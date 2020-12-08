import React from "react";

import "./RegisterForm.style.scss";

const RegisterForm = () => {
  return (
    <div>
      <form className="registerForm">
        <label>UserName</label>
        <input type="text" name="username"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Password</label>
        <input type="password" name="password"></input>
        <label>Password Again you Motherfucker</label>
        <input type="password" name="password"></input>
      </form>
    </div>
  );
};

export default RegisterForm;
