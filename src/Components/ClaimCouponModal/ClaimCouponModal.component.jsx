import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
  };
  const y = localStorage.getItem("ob_who");
  const you = localStorage.getItem("ob_username");

  const history = useHistory();

  const handleClaim = () => {
    axios
      .post(`http://localhost:5000/api/claimCoupon/${you}`, {
        business_id: props.pastData.account_business_id,
        date: props.pastData.finished_date,
        description: props.pastData.description,
        title: props.pastData.discount,
        number: props.pastData.claim_number,
        id: props.pastData.id,
        name: props.pastData.business_name,
      })
      .then((data) => {
        let x = data.data;
        if (x === "error") {
          history.push("/HomePage");
        } else if (x === "ok") {
          history.push(`/MyCouponPage/${you}`);
        }
      });
  };

  useEffect(() => {
    setWho(y);
  }, [who]);

  return (
    <div>
      <Button onClick={handleClickOpen}>Details</Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid container justify="space-between" alignItems="center" xs={12}>
          <Grid item xs={9}>
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              gutterBottom
            >
              {props.pastData.discount}
            </DialogTitle>
          </Grid>
          <Grid item xs={3}>
            {who === "user" ? (
              <Button onClick={handleClaim}>Claim Now</Button>
            ) : (
              <div></div>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>
              Outback Steakhouse
            </Typography>
          </Grid>
        </Grid>
        <DialogContent dividers>
          <Typography variant="h2" gutterBottom>
            {props.pastData.description}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Valid Until: {props.pastData.finished_date}
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography variant="h2" gutterBottom>
            Coupon Code: XXXXXX
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
        </DialogContent>
        <DialogContent dividers>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Visit Brand Profile
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CouponModal;
