import React from 'react';
import './CreateCoupon.style.scss'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"


function CreateCoupon() {

    const [open, setOpen] = React.useState(false);
    const [coupLimit, setCoupLimit] = React.useState('five');

    const handleChange = (event) => {
        setCoupLimit(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create A Coupon</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Details Below
            </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="offerExpDate"
                        label="Offer Expiry Date"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="offerName"
                        label="Offer Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="offerDesc"
                        label="Offer Description"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="selectCouponLimit"
                        select
                        label="Select Coupon Limit"
                        value={coupLimit}
                        onChange={handleChange}
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
                    <Button onClick={handleClose}>
                        Update
             </Button>
                    <Button onClick={handleClose}>
                        Cancel
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateCoupon; 