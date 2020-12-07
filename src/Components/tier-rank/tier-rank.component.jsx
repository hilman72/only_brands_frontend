import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./tier-rank.style.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const DiffRank = () => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            100 pt
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="platinum-dot">
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Platinum
            </Typography>
            <Typography>Nice</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            75 pt
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="gold-dot">
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Gold
            </Typography>
            <Typography>Nice</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            50 pt
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="silver-dot">
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Silver
            </Typography>
            <Typography>Nice</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            25 pt
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="bronze-dot">
            <CardGiftcardIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Bronze
            </Typography>
            <Typography>Nice</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            0 pt
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className="start-dot" variant="outlined">
            <ArrowDropUpIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Start
            </Typography>
            <Typography>GoGoGo</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default DiffRank;
