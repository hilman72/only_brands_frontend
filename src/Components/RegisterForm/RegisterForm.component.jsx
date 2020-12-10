import React, { useState } from "react";

import "./RegisterForm.style.scss";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_again, setPassword_again] = useState("");
  const [error, setError] = useState(false);

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
      console.log(username);
      await fetch(`http://localhost:5000/api/signup`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <div>
      {error === true ? (
        <div>plz input the same password fku</div>
      ) : (
        <div></div>
      )}

      <form className="registerForm">
        <label>UserName</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange_username}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange_email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange_password}
        ></input>
        <label>Password Again you Motherfucker</label>
        <input
          type="password"
          name="password_again"
          id="password_again"
          onChange={handleChange_password_again}
        ></input>
        <br />
        <input type="submit" value="send" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default RegisterForm;