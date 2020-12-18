import React from "react";

import "./RegisterPage.style.scss";

import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";

const RegisterPage = () => {
  return (
    <div>
      <div>
        User Register
        <RegisterForm who={"user"} />
      </div>
      <br />
      <div>
        Business Register
        <RegisterForm who={"business"} />
      </div>
    </div>
  );
};

export default RegisterPage;
