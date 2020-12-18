import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { loginUserThunk, loginFacebookThunk } from "../../Redux/actions";

import "./LoginForm.style.scss";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRedux: (username, password) => {
      dispatch(loginUserThunk(username, password));
    },
    loginFacebookRedux: (accessToken) => {
      dispatch(loginFacebookThunk(accessToken));
    },
  };
};

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleChange_username = (e) => {
    setUsername(e.target.value);
  };

  const handleChange_password = (e) => {
    setPassword(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = async () => {
    await props.loginRedux(username, password);
    setLogin(true);
  };

  useEffect(() => {
    if (props.isAuthenticated) {
      setLogin(true);
    }

    if (login === true) {
      console.log("hello");
      history.push("/HomePage");
    }
  }, [login, history, props.isAuthenticated]);

  return (
    <div className="loginForm">
      <form>
      <h2>{props.id} Login</h2>
      {/* <span>blahblahblah</span> */}
        {/* <label>UserName</label> */}
        <input
          type="text"
          name="username"
          onChange={handleChange_username}
          placeholder={props.id2}
        ></input>
        {/* <label>Password</label> */}
        <input
          type="password"
          name="password"
          onChange={handleChange_password}
          placeholder="Password"
        ></input>
        <br />
        <input
          type="submit"
          value="Sign In"
          onClick={handleSubmit}
          to="/HomePage"
        />
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
