import React from "react";

import "./LoginPage.style.scss";

import LoginForm from "../../Components/LoginForm/LoginForm.component";

const LoginPage = () => {
  return (
    <div>
      <div>
        User Login
        <LoginForm />
      </div>
      <br />
      <div>
        Business Login
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
