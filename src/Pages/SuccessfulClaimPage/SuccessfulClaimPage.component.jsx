import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import { useHistory } from "react-router-dom";

import "./SuccessfulClaimPage.style.scss";

import SuccessfulClaimCard from "../../Components/SuccessfulClaimCard/SuccessfulClaimCard";

const useStyles = makeStyles(() => ({
  container:{
    height: '100vh',
  }
}));

const SuccessfulClaimPage = () => {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/");
  // };

  const styles = useStyles();

  return (
    
    <div>
      <div className={styles.positioning}>
        <Grid container justify="space-between" alignItems="center" className={styles.container} xs={12}>
              <Grid item xs={4}>

              </Grid>
              <Grid item xs={4}>
                      <SuccessfulClaimCard />
              </Grid>
              <Grid item xs={4}>

              </Grid>
        </Grid>
      </div>


    </div>
  );
};

export default SuccessfulClaimPage;
