import React from "react";

import "./LoginPage.style.scss";

import LoginForm from "../../Components/LoginForm/LoginForm.component";

const LoginPage = () => {

  const [div, setDiv] = React.useState("container")

  function handleChange(){
      console.log("Hello")
      setDiv("container right-panel-active container")
  }

  function handleSwitch(){
    console.log("Hello")
    setDiv("container")
  }

  return (
    <div>
      {/* <div>
        User Login
        <LoginForm />
      </div>
      <br />
      <div>
        Business Login
        <LoginForm />
      </div> */}

      <div class={div} id="container">
      {/* <!----------------- SIGN UP FORM -----------------> */}

      <div class="form-container sign-up-container">

      <LoginForm />

        {/* <form action="/signup" method="POST">
          <h2>Create Account</h2>
          <span>You are one step away from knowing your next best friend!</span> */}

          {/* <!--<input type="text" placeholder="Name" />!--> */}
          {/* <input type="email" placeholder="Email" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <div><input type="submit" value="SignUp" /></div>
        </form> */}
      </div>

      {/* <!----------------- SIGN IN FORM -----------------> */}

      <div class="form-container sign-in-container">

        <LoginForm />

        {/* <form action="/login" method="POST">
          <h2>Sign in</h2>
          <span>Welcome Back! We are excited for your next Instances
            adventure!
          </span>

          <input
            type="email"
            placeholder="Email"
            name="username"
            id="username"
          />
          <input type="password" placeholder="Password" name="password" />
          <div><input type="submit" value="Login" /></div>
        </form> */}
      </div>

      {/* <!----------------- OVERLAY -----------------> */}

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h2>Users Account?</h2>
            <p>Sign in to get sweet offets!</p>
            <button onClick={handleSwitch} class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h2>Brands looking for more customers?</h2>
            <p>Sign In to create offers!</p>
            <button onClick={handleChange} class="ghost" id="signUp">Sign In as Brands Account</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default LoginPage;
