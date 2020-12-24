import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {
  Info,
  //   InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

import RestaurantMenuRoundedIcon from "@material-ui/icons/RestaurantMenuRounded";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 150,
    minHeight: 150,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 1,
      backgroundColor: "rgba(255, 76, 109, 0.2) !important",
      backgroundBlendMode: "multiply !important",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  icon: {
    position: "absolute",
    bottom: "-1.4rem",
    right: "-1.4rem",
    display: "block",
    zIndex: "0 !important",
    color: "rgba(255,255,255,0.5)",
    fontSize: "7rem",
  },
  text: {
    textAlign: "left",
  },
  button: {
    marginTop: "0.5rem"
  },
  name:{
    background: 'rgba(0,0,0,0.4)',
    borderRadius: '5px',
    padding: '3px',
  },
}));

function BrandCards(props) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  const history = useHistory();

  const go = () => {
    history.push(
      `/BusinessProfiles/${props && props.data && props.data.business_name}`
    )
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        classes={mediaStyles}
        image={props && props.data && props.data.photo}
      />

      <Box py={3} px={2} className={styles.content}>
        <Info className={styles.text} useStyles={useGalaxyInfoStyles}>
          <InfoSubtitle>
            {props && props.data && props.data.category}
          </InfoSubtitle>
          <InfoTitle className={styles.name}>
            {props && props.data && props.data.business_name}
          </InfoTitle>
          {/* <InfoCaption>Perfect for everyone</InfoCaption> */}
        </Info>
        <Button className={styles.button} onClick={go}>Visit</Button>
      </Box>
      <RestaurantMenuRoundedIcon className={styles.icon} />
    </Card>
  );
}
export default BrandCards;
