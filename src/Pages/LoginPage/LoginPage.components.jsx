import React from "react";

import "./LoginPage.style.scss";

import LoginForm from "../../Components/LoginForm/LoginForm.component";

const LoginPage = () => {

  const [div, setDiv] = React.useState("loginContainer")
  const [id, setId] = React.useState("User")
  const [id2, setId2] = React.useState("User Name")

  function handleChange(){
    setDiv("loginContainer loginRight-panel-active loginContainer")

    setTimeout(function(){
      setId("Brands")
      setId2("Brand Name")
    }, 300)
  }

  function handleSwitch(){
    setDiv("loginContainer")

    setTimeout(function(){
      setId("User")
      setId2("User Name")
    }, 300)
  }

  return (

      <div class="loginBody">


        <div class={div} id="loginContainer">
        {/* <!----------------- SIGN UP FORM -----------------> */}

        <div class="loginForm-container loginSign-up-container">

        <LoginForm id={id} id2={id2}/>

        </div>

        {/* <!----------------- SIGN IN FORM -----------------> */}

        <div class="loginForm-container loginSign-in-container">

        <LoginForm id={id} id2={id2}/>

        </div>


        {/* <!----------------- OVERLAY -----------------> */}

        <div class="loginOverlay-container">
          <div class="loginOverlay">
            <div class="loginOverlay-panel loginOverlay-left">
              <h2 class="loginH2">Users Account?</h2>
              <p class="loginP">Sign in to get sweet offets!</p>
              <button onClick={handleSwitch} class="ghost loginButton" id="signIn">Sign In</button>
            </div>
            <div class="loginOverlay-panel loginOverlay-right">
              <h2 class="loginH2">Brands looking for more customers?</h2>
              <p class="loginP">Sign In to create offers!</p>
              <button onClick={handleChange} class="ghost loginButton" id="signUp">Sign In as Brands Account</button>
            </div>
          </div>
        </div>
      </div>

      </div>

  );
};

export default LoginPage;
