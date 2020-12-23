import React from "react";
import "./RecommendationCards.style.scss";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRightRounded from "@material-ui/icons/KeyboardArrowRightRounded";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import ModeComment from "@material-ui/icons/ModeComment";
import Favorite from "@material-ui/icons/Favorite";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  card: {
    display: "flex",
    padding: theme.spacing(2),
    borderRadius: 16,
    height: '138px',
  },
  media: {
    minWidth: "25%",
    maxWidth: "25%",
    flexShrink: 0,
    backgroundColor: "grey",
    borderRadius: 12,
    boxShadow: "0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9",
  },
  content: {
    padding: theme.spacing(0, 2, 0, 0),
    marginRight: "-2rem",
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    color: "rbga(0,0,0,0.7)",
    letterSpacing: "0.5px",
    marginBottom: 2,
  },
  body: {
    fontSize: 14,
    color: "grey",
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  textFooter: {
    fontSize: 14,
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    fontSize: "1.2rem",
    verticalAlign: "bottom",
  },
  smallIcon: {
    fontSize: "1rem",
    verticalAlign: "middle",
    color: "grey",
  },
  avatar: {
    width: 60,
    height: 60,
    top: 0,
    border: "3px solid #8eebdc",
    borderRadius: "50%",
    transform: "translate(2rem,-0.5rem)",
  },
  closeButton: {
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    float: "right",
  },
}));

function RecommendationCards(props) {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Grid justify="space-between" alignItems="center" container xs={12}>
          <Grid item xs={11}>
            <Typography variant="h3">{children}</Typography>
          </Grid>
          <Grid item xs={1}>
            {onClose ? (
              <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </Grid>
        </Grid>
      </MuiDialogTitle>
    );
  });

  return (
    <Card className={styles.card} elevation={2}>
      <CardContent className={styles.content}>
        <Box>
          <h3 className={styles.heading}>OUTBACK STEAKHOUSE</h3>
        </Box>
        <p className={styles.body}>{props.data && props.data.reviewdetail}</p>
        <Divider className={styles.divider} light />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            className={styles.textFooter}
            component={"button"}
            onClick={handleClickOpen}
          >
            Read more <KeyboardArrowRightRounded className={styles.icon} />
          </Link>
        </Box>
      </CardContent>
      <Avatar
        className={styles.avatar}
        src={
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheblogofkevin.files.wordpress.com%2F2011%2F04%2Fdonkey-shrek-iphone-4-wallpaper-320x480.jpg&f=1&nofb=1"
        }
      />
      <CardMedia
        className={styles.media}
        image="https://source.unsplash.com/random"
      />

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Outback Steakhouse
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            "Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.""
          </Typography>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default RecommendationCards;