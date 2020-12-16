import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutNowThunk } from "../../Redux/actions";

import "./notyet_verify.styles.scss";

const NotYet = (props) => {
  const history = useHistory();

  const handleClick = () => {
    props.logoutRedux();
    history.push("/");
  };

  return (
    <div>
      <h1> check your fuckin email asshole</h1>
      <button onClick={handleClick}>go home</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRedux: () => {
      dispatch(logoutNowThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotYet);
