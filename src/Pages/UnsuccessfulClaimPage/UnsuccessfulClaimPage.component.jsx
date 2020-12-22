import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import { useHistory } from "react-router-dom";

import "./UnsuccessfulClaimPage.style.scss";

import UnsuccessfulClaimCard from "../../Components/UnsuccessfulClaimCard/UnsuccessfulClaimCard";

const useStyles = makeStyles(() => ({
  container:{
    height: '100vh',
  }
}));

const UnsuccessfulClaimPage = () => {
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
                      <UnsuccessfulClaimCard />
              </Grid>
              <Grid item xs={4}>

              </Grid>
        </Grid>
      </div>


    </div>
  );
};

export default UnsuccessfulClaimPage;
