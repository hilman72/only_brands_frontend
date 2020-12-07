import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./user-rank.style.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const UserRank = () => {
  const classes = useStyles();
  // const [progress, setProgress] = React.useState(50);
  const [progress] = React.useState(50);

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((oldProgress) => {
  //         if (oldProgress === 100) {
  //           return 0;
  //         }
  //         const diff = Math.random() * 10;
  //         return Math.min(oldProgress + diff, 100);
  //       });
  //     }, 500);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default UserRank;
