import React, { useState, useEffect } from "react";
import "./CreateCoupon.style.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

function CreateCoupon() {
  const [open, setOpen] = useState(false);
  const [coupLimit, setCoupLimit] = useState("");
  const [date, setDate] = useState("");
  const [offer, setOffer] = useState("");
  const [detail, setDetail] = useState("");
  const [create, setCreate] = useState(false);

  const handleChange_date = (event) => {
    setDate(event.target.value);
  };

  const handleChange_offer = (event) => {
    setOffer(event.target.value);
  };

  const handleChange_detail = (event) => {
    setDetail(event.target.value);
  };

  const handleChange_number = (event) => {
    setCoupLimit(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const b_id = localStorage.getItem("ob_id");
    await fetch(`http://localhost:5000/api/createCoupon`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        finished_date: date,
        description: detail,
        discount: offer,
        limit: coupLimit,
        account_business_id: b_id,
      }),
    });
    setCreate(true);
  };

  useEffect(() => {
    if (create === true) {
      setOpen(false);
    }
  }, [create]);

  const couponLimit = [
    {
      label: 5,
    },
    {
      label: 10,
    },
    {
      label: 15,
    },
    {
      label: 20,
    },
    {
      label: 25,
    },
    {
      label: 30,
    },
    {
      label: 35,
    },
    {
      label: 40,
    },
    {
      label: 45,
    },
    {
      label: 50,
    },
  ];

  return (
    <div>
      <Button onClick={handleClickOpen}>Create A Coupon</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create A Coupon</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Details Below</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="offerExpDate"
            label="Offer Expiry Date"
            InputLabelProps={{ shrink: true }}
            type="date"
            onChange={handleChange_date}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="offerName"
            label="Offer Name"
            type="text"
            onChange={handleChange_offer}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="offerDesc"
            label="Offer Description"
            type="text"
            onChange={handleChange_detail}
            fullWidth
          />
          <TextField
            id="selectCouponLimit"
            select
            label="Select Coupon Limit"
            value={coupLimit}
            onChange={handleChange_number}
            helperText="Please select the maximum coupon limit"
            variant="filled"
          >
            {couponLimit.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateCoupon;
