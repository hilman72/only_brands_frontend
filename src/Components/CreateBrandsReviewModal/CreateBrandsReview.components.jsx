import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//for redux
import { useSelector, useDispatch } from "react-redux";
import { uploadreview } from '../../Redux/Actions/Reviewactions';
import Axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function CreateBrandReview() {

    const importantid = localStorage.getItem("ob_id");
    //redux
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [reviewdetail, setReviewdetail] = React.useState("")
    let location = useLocation();
    const pathname = location.pathname.split("/");
    const render_business = pathname[2];


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changereviewdetail = (e) => {
        setReviewdetail(e.target.value)
    }

    const handleSubmit = () => {
        console.log(render_business)
        dispatch(uploadreview(render_business, reviewdetail, importantid))
    }


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Leave a Review
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Your newest Review
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        this is your newest review
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="review"
                        label="Review"
                        type="email"
                        fullWidth
                        value={reviewdetail}
                        onChange={changereviewdetail}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
