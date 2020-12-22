import React from "react";
import "./UserCreateProfileForm.style.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

// const family = 'PeaceSans';

const useStyles = makeStyles(() => ({
  // gutter: {
  //   height: '5rem',
  //   backgroundColor: '#ff4c6d',
  // },
  // container:{
  //   padding: '1rem',
  // },
  icon: {
    fontSize: "5rem",
    color: "#ff4c6d",
  },
  paper: {
    width: "35rem",
    // padding: "0 2.5rem 2.5rem 2.5rem",
    border: "5px solid #ff4c6d",
    borderRadius: "1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    margin: "auto",
  },
  button: {
    padding: "0.7rem",
    borderRadius: "1.5rem",
    backgroundColor: "#ff4c6d",
    color: "white",
    border: "3px solid #8eebdc",
    padding: "0.5rem 1.3rem 0.5rem 1.3rem",
  },
  title: {
    backgroundColor: "#ff4c6d",
    margin: 0,
    padding: '0.5rem',
    color: '#ffffff',
  },
  submit:{
    margin: 'theme.spacing(3, 0, 2)',
  },
  // formContainer:{
  //   padding:"1.5rem",
  // },
}));

function EmailVerificationCard() {
  const styles = useStyles();

  const history = useHistory();

{/* hilmanplzeditthis-onclick */}
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
            {/* <Grid item xs={12} className={styles.gutter}>gutter</Grid>
                <Grid item xs={12}>
                    <EmailIcon className={styles.icon}/>
                </Grid>
                <Grid item xs={12} className={styles.gutter}></Grid> */}
            {/* <Grid item xs={12}>
                    <h2 className={styles.title}>Email Sent asdhufasdhflaisudh</h2>
                </Grid> */}
            <Grid item xs={12}>

{/* ---------------------- FORM STARTS ---------------------- */}
              
                {/* <form className={classes.form} noValidate> */}
                  <Grid container spacing={2} className={styles.formContainer}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                {/* </form> */}

{/* ---------------------- FORM ENDS ---------------------- */}
            </Grid>
            <Grid item xs={12}>
      {/* hilmanplzeditthis-onclick */}
              <button onClick={handleClick} className={styles.button}>
                Create Profile
              </button>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};


export default EmailVerificationCard;
