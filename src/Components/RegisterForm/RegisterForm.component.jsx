import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./RegisterForm.style.scss";

const RegisterForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_again, setPassword_again] = useState("");
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);
  const [who, setWho] = useState("");

  const handleChange_username = (e) => {
    setUsername(e.target.value);
  };

  const handleChange_email = (e) => {
    setEmail(e.target.value);
  };

  const handleChange_password = (e) => {
    setPassword(e.target.value);
  };

  const handleChange_password_again = (e) => {
    setPassword_again(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_again) {
      setError(true);
    } else {
      if (who === "user") {
        console.log("hi_user");
        await fetch(`http://localhost:5000/api/signup/user`, {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }).then(setRegister(true));
      } else if (who === "business") {
        console.log("hi_business");
        await fetch(`http://localhost:5000/api/signup/business`, {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }).then(setRegister(true));
      }
    }
  };

  const history = useHistory();

  useEffect(() => {
    setWho(props.who);

    if (register === true) {
      history.push("/After");
    }
  }, [register, history, props.who]);

  return (

    <div>
      
      {error === true ? (
        <div>Please input the same password</div>
      ) : (
        <div></div>
      )}
    <div>

    <div className="registerForm">
      <form>
        {/* <label>UserName</label> */}
        <h2 class="registerH2">{props.id} Register</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder={props.id2}
          onChange={handleChange_username}
        ></input>
        {/* <label>Email</label> */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange_email}
        ></input>
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange_password}
        ></input>
        {/* <label>Password Again you Motherfucker</label> */}
        <input
          type="password"
          name="password_again"
          id="password_again"
          placeholder="Confirm Password"
          onChange={handleChange_password_again}
        ></input>
        <br />
        <input type="submit" value="send" onClick={handleSubmit} class="registerFormButton registerButton" />
      </form>
    </div>

</div>
</div>

  );
};

export default RegisterForm;
