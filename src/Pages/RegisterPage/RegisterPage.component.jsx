import React from "react";

import "./RegisterPage.style.scss";

import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";

const RegisterPage = () => {
  return (
    <div>
      <div>
        User Register
        <RegisterForm />
      </div>
      <br />
      <div>
        Business Register
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
