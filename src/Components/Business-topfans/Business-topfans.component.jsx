import React from "react";
import TopFanList from "../all-time-topfans-list/all-time-topfans-list.component";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./Business-topfans.style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const BusinessTopFans = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          All Time Ranking
          <TopFanList />
        </Grid>
        <Grid item xs={12} sm={6}>
          Season Ranking
          <TopFanList />
        </Grid>
      </Grid>
    </div>
  );
};
export default BusinessTopFans;
