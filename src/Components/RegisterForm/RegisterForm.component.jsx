import React from "react";

import "./RegisterForm.style.scss";

const RegisterForm = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form className="registerForm">
        <label>UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        ></input>
        <label>Password Again you Motherfucker</label>
        <input
          type="password"
          name="password_again"
          id="password_again"
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default RegisterForm;
