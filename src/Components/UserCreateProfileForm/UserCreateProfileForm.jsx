import React from "react";
import "./UserCreateProfileForm.style.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

// const family = 'PeaceSans';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: "5rem",
    color: "#ff4c6d",
  },
  paper: {
    borderRadius: "1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    margin: "auto",
  },
  button: {
    padding: "0.4rem",
    borderRadius: "1rem",
    backgroundColor: "#ff4c6d",
    color: "white",
    border: "3px solid #8eebdc",
  },
  title: {
    backgroundColor: "#ff4c6d",
    margin: '0',
    padding: "0.5rem",
    paddingTop: '1rem',
    paddingBottom: '1rem',
    color: "#ffffff",
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  formContainer: {
    padding: "3rem",
  },
  lastRow:{
    display: 'flex',
    justifyContent: 'center',
  },
}));

function UserCreateProfileForm() {
  const styles = useStyles();

  const history = useHistory();

  {
    /* hilmanplzeditthis-onclick */
  }
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <Paper className={styles.paper}>
        <Grid container direction="column">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            xs={12}
          >
            <Grid item xs={12}>
              <h2 className={styles.title}>Create User Profile</h2>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
          >

            <Grid item xs={12}>
              {/* ---------------------- FORM STARTS ---------------------- */}

              {/* <form className={classes.form} noValidate> */}
              <Grid container spacing={2} className={styles.formContainer}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    // name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    // id="firstName"
                    label="About Me"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    // id="lastName"
                    label="Location"
                    // name="lastName"
                    autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12} className={styles.lastRow}>
                  {/* hilmanplzeditthis-onclick */}
                  <button onClick={handleClick} className={styles.button}>
                    Create Profile
                  </button>
                </Grid>
              </Grid>

              {/* ---------------------- FORM ENDS ---------------------- */}

            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserCreateProfileForm;
