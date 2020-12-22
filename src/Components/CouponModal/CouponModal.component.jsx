import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle className={classes.root} {...other}>
      <Typography variant="h1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

function CouponModal(props) {
  const [open, setOpen] = useState(false);
  const [who, setWho] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    props.update();
  };

  const handleRef = () => {
    axios.post(`http://localhost:5000/api/makeRef/`, {
      u_name: props.pastData.user_name,
      b_name: props.pastData.business_name,
    });
    console.log("ref");
  };

  const handleConfirm = () => {
    axios
      .post(`http://localhost:5000/api/confirmCoupon/`, {
        u_name: props.pastData.user_name,
        b_name: props.pastData.business_name,
        id: props.pastData.coupon_id,
      })
      .then(handleRef(), handleClose());
  };

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const y = localStorage.getItem("ob_who");
  const you = localStorage.getItem("ob_username");

  useEffect(() => {
    setWho(y);
  }, [who, open]);

  return (
    <div>
      {you === render_user &&
      props.pastData.used === false &&
      props.pastData.expired === false ? (
        <Button onClick={handleClickOpen}>Details</Button>
      ) : (
        <div></div>
      )}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.pastData.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h2" gutterBottom>
            {props.pastData.description}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Valid Until: {props.pastData.date}
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography variant="h2" gutterBottom>
            Coupon Code: {props.pastData.coupon_id}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Terms & Conditions:
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
          <DialogActions>
            {who === "business" ? (
              <Button autoFocus onClick={handleConfirm}>
                Confirm
              </Button>
            ) : (
              <div></div>
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CouponModal;
