
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";


import "./BusinessProfiles.style.scss";
import BusinessDetail from "../../Components/Business-detail/Business-detail.component";
import BusinessWindows from "../../Components/Business-windows/Business-windows.component";
import Header from "../../Components/Header/Header.component";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(({ palette }) => ({
  background: {
    backgroundColor: "#f0f0f0",
  },
  bottomContainer:{
    paddingTop: "1rem",
  },
  cover: {
    height: 6
  },
  paper: {
    borderRadius: '1rem'
  }
}));

function BusinessProfiles() {


  const styles = useStyles();

  const [who, setWho] = useState("");

  useEffect(() => {
    let x = localStorage.getItem("ob_who");
    setWho(x);
  }, [who]);


  return (
    <div>
      <Header />
      <Grid container className={styles.background}>
        <Grid className="bannerImg" item xs={12}>
          Banner Photo
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            Gutter
          </Grid>
          <Grid container xs={8}>
            <Grid className={styles.cover} item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <BusinessDetail who={who} />
            </Grid>
            <Grid item className={styles.bottomContainer} xs={12}>
              <Paper className={styles.paper} elevation={2}>
                <BusinessWindows who={who}/>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            Gutter
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BusinessProfiles;
