

import React from 'react';
import './emailVerificationCard.style.scss'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useHistory } from "react-router-dom";

import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

// const family = 'PeaceSans';

const useStyles = makeStyles(() => ({
//   gutter: {
//     height: '1rem',
//   },
  icon:{
      fontSize: '5rem',
      color: '#ff4c6d',
  },
  paper:{
      padding: '2.5rem',
      border: '5px solid #ff4c6d',
      borderRadius: '1rem',
  },
  button:{
    padding: '0.7rem',
    borderRadius: '1.5rem',
    backgroundColor: '#ff4c6d',
    color: 'white',
    border: '3px solid #8eebdc',
    padding: '0.5rem 1.3rem 0.5rem 1.3rem',
  }
}));

function EmailVerificationCard() {
  const styles = useStyles();

    const history = useHistory();

    const handleClick = () => {
    history.push("/");
    };

  return (
    <div>
        <Paper className={styles.paper}>
            <Grid container direction="column" justify="center" alignItems="center" xs={12}>
                <Grid item xs={12} className={styles.gutter}></Grid>
                <Grid item xs={12}>
                    <EmailIcon className={styles.icon}/>
                </Grid>
                <Grid item xs={12} className={styles.gutter}></Grid>
                <Grid item xs={12}>
                    <h2>Email Sent</h2>
                </Grid>
                <Grid item xs={12}>
                    <p>We have sent an email to verify registered email lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                </Grid>
                <Grid item xs={12}>
                    <button onClick={handleClick} className={styles.button}>Home</button>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </Paper>
    </div>
  );
}

export default EmailVerificationCard; 