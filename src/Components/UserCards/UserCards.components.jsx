import React from "react";
import "./UserCards.style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    card: {
      height: 100,
    },
    border: {
      border: "6px solid black !important",
    },
  },
}));

function UserCards(props) {
  const styles = useStyles();
  const avatarStyles = useDynamicAvatarStyles({ radius: 50, size: 70 });
  return (
    <Row
      className={styles.border}
      p={2}
      gap={2}
      bgcolor={"#ffffff"}
      borderRadius={16}
    >
      <Item className={styles.card}>
        <Avatar
          classes={avatarStyles}
          src={props && props.data && props.data.photo}
        />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>{props && props.data && props.data.user_name}</InfoTitle>
        <InfoSubtitle>
          {props && props.data && props.data.description}
        </InfoSubtitle>
      </Info>
      <Item position={"middle"}>
        <Button>Follow</Button>
      </Item>
    </Row>
  );
}

export default UserCards;
