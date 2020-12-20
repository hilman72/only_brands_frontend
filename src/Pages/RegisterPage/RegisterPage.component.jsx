import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import "./RegisterPage.style.scss";

import logo from "../../Assets/Images/smallLogo.png";

import RegisterForm from "../../Components/RegisterForm/RegisterForm.component";

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    border: "3px solid #ff4c6d",
    borderRadius: "50%",
    height: "3rem",
    padding: "0.5rem",
    position: "absolute !important",
    top: "10px",
    left: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  },
  // button:{
  //   position: 'absolute !important',
  //   top: '10px',
  //   left: '10px',
  //   border: 'none',
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   borderRadius:'50%',
  // },
  RegisterBody: {
    backgroundColor: "#f0f0f0",
  },
  toLogin: {
    fontSize: "0.7rem !important",
    paddingTop: "2rem",
    color: "#282828",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const RegisterPage = () => {
  const [div, setDiv] = React.useState("registerContainer");
  const [id, setId] = React.useState("User");
  const [id2, setId2] = React.useState("User Name");

  const history = useHistory();

    function navigateToHome() {
    history.push("/");
  }

  function navigateToLogin() {
    history.push("/LoginPage");
  }

  function handleChange() {
    setDiv("registerContainer registerRight-panel-active registerContainer");

    setTimeout(function () {
      setId("Brands");
      setId2("Brand Name");
    }, 300);
  }


  function handleSwitch() {
    setDiv("registerContainer");

    setTimeout(function () {
      setId("User");
      setId2("User Name");
    }, 300);
  }

  const styles = useStyles();

  return (
    <div class="registerBody">
      <img src={logo} onClick={navigateToHome} className={styles.logo} />

      <div class={div} id="registerContainer">
        {/* <!----------------- SIGN IN FORM -----------------> */}

        <div class="registerForm-container registerSign-in-container">
          <RegisterForm who={"user"} id={id} id2={id2} />
        </div>

        {/* <!----------------- SIGN UP FORM -----------------> */}

        <div class="registerForm-container registerSign-up-container">
          <RegisterForm who={"business"} id={id} id2={id2} />
        </div>

      <div class="registerOverlay-container">
        <div class="registerOverlay">
          <div class="registerOverlay-panel registerOverlay-left">
            <h2 class="registerH2">Looking for discounts in your favourite restaurant?</h2>
            <p class="registerP">Join OnlyBrands to get sweet offets!</p>
            <button
              onClick={handleSwitch}
              class="ghost registerButton"
              id="signIn"
            >
              Register
            </button>
            <p onClick={navigateToLogin} className={styles.toLogin}>
              {" "}
              Have an account already? Click me to login!
            </p>
          </div>
          <div class="registerOverlay-panel registerOverlay-right">
            <h2 class="registerH2">Brands looking for more customers?</h2>
            <p class="registerP">Create your fanbase on OnlyBrands!</p>
            <button
              onClick={handleChange}
              class="ghost registerButton"
              id="signUp"
            >
              Register a Brands Account
            </button>
            <p onClick={navigateToLogin} className={styles.toLogin}>
              {" "}
              Have an account already? Click me to login!
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
