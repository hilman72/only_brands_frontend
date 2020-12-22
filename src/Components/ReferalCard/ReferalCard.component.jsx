import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import Earn Reward
import ReferalEarnReward from "../ReferalEarnReward/ReferalEarnReward.component";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ReferalCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Photo Title"
        height="140"
        image="https://source.unsplash.com/random"
        title="Photo Title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data.business_name}`s Refercal Coupon
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Refercal Coupon sent by {props.data.send_by}
        </Typography>
      </CardContent>

      <CardActions>
        <ReferalEarnReward data={props.data} />
      </CardActions>
    </Card>
  );
}
