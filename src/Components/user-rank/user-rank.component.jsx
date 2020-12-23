import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector, useDispatch } from "react-redux";
import { upload } from "../../Redux/Actions/TMactions";
import Axios from "axios";

import "./user-rank.style.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const UserRank = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);


  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default UserRank;
