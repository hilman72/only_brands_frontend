import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function ReferalEarnReward(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    axios
      .post(`http://localhost:5000/api/sendRef/`, {
        name: props.data.send_by,
        business_name: props.data.business_name,
        id: props.data.id,
      })
      .then(handleClose());
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Send Referal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.data.business_name}`s Refercal Coupon
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Refercal Coupon sent by {props.data.send_by}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go back</Button>
          <Button onClick={handleSend}>Claim Now</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
