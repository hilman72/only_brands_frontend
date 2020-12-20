import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutNowThunk } from "../../Redux/actions";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import NotYetVerifiedCard from "../../Components/NotYetVerifiedCard/NotYetVerifiedCard";

import "./notyet_verify.styles.scss";

const useStyles = makeStyles(() => ({
  container:{
    height: '100vh',
  }
}));

const NotYet = (props) => {
  const history = useHistory();

  const handleClick = () => {
    props.logoutRedux();
    history.push("/");
  };

  const styles = useStyles();

  return (
    <div>
      {/* <h1> check your fuckin email asshole</h1>
      <button onClick={handleClick}>go home</button> */}

      <div className={styles.positioning}>
        <Grid container justify="space-between" alignItems="center" className={styles.container} xs={12}>
              <Grid item xs={4}>

              </Grid>
              <Grid item xs={4}>
                      <NotYetVerifiedCard />
              </Grid>
              <Grid item xs={4}>

              </Grid>
        </Grid>
      </div>

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
