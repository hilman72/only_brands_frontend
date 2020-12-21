import React from "react";

import "./RegisterPage.style.scss";

import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";

const RegisterPage = () => {

  const [div, setDiv] = React.useState("registerContainer")
  const [id, setId] = React.useState("User")
  const [id2, setId2] = React.useState("User Name")

  function handleChange(){
    setDiv("registerContainer registerRight-panel-active")

    setTimeout(function(){
      setId("Brands")
      setId2("Brand Name")
    }, 300)
    
  }

  function handleSwitch(){
    setDiv("registerContainer")
    
    setTimeout(function(){
      setId("User")
      setId2("User Name")
    }, 300)
    
  }

  return (
    <div class="registerBody">


      <div class={div} id="registerContainer">


      {/* <!----------------- SIGN IN FORM -----------------> */}

      <div class="registerForm-container registerSign-in-container">

      <RegisterForm who={'user'} id={id} id2={id2}/>

      </div>

      {/* <!----------------- SIGN UP FORM -----------------> */}

      <div class="registerForm-container registerSign-up-container">

      <RegisterForm who={'business'} id={id} id2={id2}/>

      </div>

      {/* <!----------------- OVERLAY -----------------> */}

      <div class="registerOverlay-container">
        <div class="registerOverlay">
        <div class="registerOverlay-panel registerOverlay-left">
            <h2 class="registerH2">Looking for discounts in your favourite restaurant?</h2>
            <p class="registerP">Join OnlyBrands to get sweet offets!</p>
            <button onClick={handleSwitch} class="ghost registerButton" id="signIn">Register</button>
          </div>
          <div class="registerOverlay-panel registerOverlay-right">
            <h2 class="registerH2">Brands looking for more customers?</h2>
            <p class="registerP">Create your fanbase on OnlyBrands!</p>
            <button onClick={handleChange} class="ghost registerButton" id="signUp">Register a Brands Account</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default RegisterPage;
