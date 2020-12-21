

import React from 'react';
import './NotYetVerifiedCard.style.scss';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useHistory } from "react-router-dom";

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { makeStyles } from '@material-ui/core/styles';

// const family = 'PeaceSans';

const useStyles = makeStyles(() => ({
//   gutter: {
//     height: '1rem',
//   },
  icon:{
      fontSize: '5rem',
      color: '#8eebdc',
  },
  paper:{
      padding: '2.5rem',
      border: '5px solid #8eebdc',
      borderRadius: '1rem',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  },
  button:{
    padding: '0.7rem',
    borderRadius: '1.5rem',
    backgroundColor: '#8eebdc',
    color: 'white',
    border: '3px solid #8eebdc',
    padding: '0.5rem 1.3rem 0.5rem 1.3rem',
  }
}));

function NotYetVerifiedCard() {
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
                    <VerifiedUserIcon className={styles.icon}/>
                </Grid>
                <Grid item xs={12} className={styles.gutter}></Grid>
                <Grid item xs={12}>
                    <h2>Please Verify Your Account</h2>
                </Grid>
                <Grid item xs={12}>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
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

export default NotYetVerifiedCard; 