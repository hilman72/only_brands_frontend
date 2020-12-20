import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./LoginPage.style.scss";

import LoginForm from "../../Components/LoginForm/LoginForm.component";

import logo from '../../Assets/Images/smallLogo.png'

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    border:"3px solid #8eebdc",
    borderRadius:'50%',
    height: '3rem',
    padding: '0.5rem',
    position: 'absolute !important',
    top: '10px',
    left: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
  // button:{
  //   position: 'absolute !important',
  //   top: '10px',
  //   left: '10px',
  //   border: 'none',
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   borderRadius:'50%',
  // },
  loginBody:{
    backgroundColor:"#f0f0f0",
  },
  toReg:{
    fontSize:"0.7rem !important",
    paddingTop:"2rem",
    "&:hover":{
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }
}));

const LoginPage = () => {

  const [div, setDiv] = React.useState("loginContainer")
  const [id, setId] = React.useState("User")
  const [id2, setId2] = React.useState("User Name")

  const history = useHistory();

  function navigateToHome(){
    history.push("/");
  }

  function navigateToRegister(){
    history.push("/RegisterPage")
  }

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

  const styles = useStyles();



  return (

      <div class="loginBody">
      
      <img src={logo} onClick={navigateToHome} className={styles.logo}/>


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
              <p onClick={navigateToRegister} className={styles.toReg}> Don't have an account yet? register one!</p>
            </div>
            <div class="loginOverlay-panel loginOverlay-right">
              <h2 class="loginH2">Brands looking for more customers?</h2>
              <p class="loginP">Sign In to create offers!</p>
              <button onClick={handleChange} class="ghost loginButton" id="signUp">Sign In as Brands Account</button>
              <p onClick={navigateToRegister} className={styles.toReg}> Don't have an account yet? register one!</p>
            </div>
          </div>
        </div>
      </div>

      </div>

  );
};

export default LoginPage;
