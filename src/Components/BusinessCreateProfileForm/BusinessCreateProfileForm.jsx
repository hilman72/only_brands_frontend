import React from "react";
import "./BusinessCreateProfileForm.style.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

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
    backgroundColor: "#8eebdc",
    color: "white",
    border: "3px solid #ff829b",
  },
  title: {
    backgroundColor: "#8eebdc",
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
  formControl: {
    minWidth: '120',
  },
}));

function EmailVerificationCard() {
  const styles = useStyles();

  const history = useHistory();

  const [cate, setCate] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCate(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
              <h2 className={styles.title}>Create Business Profile</h2>
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

              <Grid container spacing={2} className={styles.formContainer}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="About The Brand"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Address"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth className={styles.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={cate}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Cantonese</MenuItem>
                      <MenuItem value={10}>Europe</MenuItem>
                      <MenuItem value={20}>French</MenuItem>
                      <MenuItem value={30}>Indian</MenuItem>
                      <MenuItem value={40}>Italian</MenuItem>
                      <MenuItem value={50}>Japanese</MenuItem>
                      <MenuItem value={60}>Korean</MenuItem>
                      <MenuItem value={70}>Taiwanese</MenuItem>
                      <MenuItem value={80}>Thai</MenuItem>
                      <MenuItem value={90}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Points per Referral"
                    name="lastName"
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

export default EmailVerificationCard;
