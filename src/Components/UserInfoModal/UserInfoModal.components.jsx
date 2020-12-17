import React from 'react';
import './UserInfoModal.style.scss'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

//redux
import { useSelector, useDispatch } from "react-redux";
import { upload } from "../../Redux/Actions/TMactions";
import Axios from 'axios';

function UserInfoModal() {

    // State to store uploaded file
    const importantid = (localStorage.getItem("ob_id"))
    console.log(importantid)
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("User Input");
    const [photofile, setphotoFile] = React.useState("");

    const [photofile2, setphotoFile2] = React.useState("")
    const TMB = useSelector((state) => state.userInfoUploadStore);
    const { loading, success, userInfoUploadObject } = TMB;

    const dispatch = useDispatch();



    //End of state i used 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Button className="edit" onClick={handleClickOpen}>gg Edit Profile</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Profile Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Details Below
            </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="location"
                        label="Location"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Change Name"
                        value={name}
                        type="text"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* this is for the photo input 
                    <Button type="file" onClick={handleUpload}>
                        Upload Image
                    </Button> */}
                </DialogContent>
                <DialogActions>
                    <Button >
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

export default UserInfoModal;