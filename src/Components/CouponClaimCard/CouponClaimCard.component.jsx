import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "4px solid #ff4c6d",
    borderRadius: "0.5rem",
  },
  button: {
    color: "white",
  },
});

export default function CouponClaimCard(props) {
  const classes = useStyles();

  const history = useHistory();

  const you = localStorage.getItem("ob_username");

  const handleClaim = () => {
    axios
      .post(`http://localhost:5000/api/claimRef/`, {
        name: you,
        b_name: props.data.b_name,
        sent_by: props.data.send,
        id: props.data.id,
      })
      .then((data) => {
        if (data.data === "error") {
          history.push("/HomePage");
        } else if (data.data === "ok") {
          history.push("/HomePage");
        }
      });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.b_name} Ref Coupon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sent by {props.data.send}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          className={classes.button}
          onClick={handleClaim}
        >
          Claim
        </Button>
      </CardActions>
    </Card>
  );
}
