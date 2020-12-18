// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import CouponModal from "../CouponModal/CouponModal.component";
// // for linked modal
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 345,
//   },
//    closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// }));

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardMedia
//         component="img"
//         alt="Contemplative Reptile"
//         height="140"
//         image="https://source.unsplash.com/random"
//         title="Contemplative Reptile"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           ALL YOU CAN DRINK FOR $250
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//         </Typography>
//       </CardContent>

//     </Card>
//   );
// }

import React from "react";
import "./Coupon.style.scss";
import cx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import VerticalTicketRip from "@mui-treasury/components/rip/verticalTicket";
import { useVerticalRipStyles } from "@mui-treasury/styles/rip/vertical";
import Button from "@material-ui/core/Button";
import ConfirmationNumberRoundedIcon from "@material-ui/icons/ConfirmationNumberRounded";

const mainColor = "#ff829b";
const lightColor = "#ff4c6d";
const borderRadius = 12;

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    overflow: "visible",
    background: "none",
    display: "flex",
    minWidth: 300,
    minHeight: 120,
    filter: "drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))",
    "& $moveLeft, $moveRight": {
      transition: "0.3s",
    },
    "&:hover": {
      "& $moveLeft": {
        transform: "translateX(-8px)",
      },
      "& $moveRight": {
        transform: "translateX(8px)",
      },
    },
    [breakpoints.up("sm")]: {
      minWidth: 400,
    },
    position: "relative",
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: "25%",
    display: "flex",
    backgroundColor: "#fff",
  },
  media: {
    margin: "auto",
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: "4px solid #8eebdc",
  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    padding: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ff829b",
    position: "relative",
    overflow: "hidden",
  },
  label: {
    padding: "2px 8px",
    // backgroundColor: '#c60042'
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    margin: 0,
    marginBottom: 4,
    position: "relative",
    textAlign: "center",
    textShadow:
      "2px 0 0 #8eebdc, -2px 0 0 #8eebdc, 0 2px 0 #8eebdc, 0 -2px 0 #8eebdc, 1px 1px #8eebdc, -1px -1px 0 #8eebdc, 1px -1px 0 #8eebdc, -1px 1px 0 #8eebdc",
  },
  subheader: {
    fontSize: 15,
    textTransform: "uppercase",
    color: palette.text.secondary,
    letterSpacing: 2,
    textAlign: "left",
  },
  text: {
    fontSize: 10,
    color: palette.text.secondary,
    textAlign: "left",
  },
  path: {
    flex: 1,
    flexBasis: 72,
    padding: "0 4px",
  },
  line: {
    position: "relative",
    margin: "20px 0 16px",
    borderBottom: "1px dashed rgba(0,0,0,0.38)",
  },
  brandInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  moveLeft: {},
  moveRight: {},
  icon: {
    position: "absolute",
    bottom: "-1.4rem",
    right: "-1.4rem",
    display: "block",
    zIndex: "0 !important",
    color: "#ffb4cc",
    fontSize: "7rem",
    transform: "rotate(45deg)",
  },
  button: {
    position: "relative",
    zIndex: 1,
  },
}));

function Coupon(props) {
  const styles = useStyles();
  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: lightColor,
    tearColor: mainColor,
  });

  return (
    <Card className={styles.card} elevation={0}>
      <div className={cx(styles.left, styles.moveLeft)}>
        <CardMedia
          className={styles.media}
          image={
            "https://image.shutterstock.com/z/stock-photo-funny-cow-at-the-kaisergebirge-mountain-737388658.jpg"
          }
        />
      </div>
      <VerticalTicketRip
        classes={{
          ...ripStyles,
          left: cx(ripStyles.left, styles.moveLeft),
          right: cx(ripStyles.right, styles.moveRight),
        }}
      />
      <div className={cx(styles.right, styles.moveRight)}>
        <Grid container>
          <ConfirmationNumberRoundedIcon className={styles.icon} />
          <Grid item xs={12}>
            <div className={styles.label}>
              <h2 className={styles.heading}>
                {props && props.data && props.data.title}
              </h2>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="brandInfo">
              <h4 className={styles.subheader}>
                {props && props.data && props.data.business_name}
              </h4>
              <p className={styles.text}>
                Valid Until: {props && props.data && props.data.date}
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="buttonContainer">
              <CardActions>
                <CouponModal pastData={props.data} />
              </CardActions>
            </div>
          </Grid>
          {/* <ConfirmationNumberRoundedIcon className={styles.icon}/> */}
        </Grid>
      </div>
    </Card>
  );
}

export default Coupon;
