import React from 'react';
import './UserInfoModal.style.scss'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

function UserInfoModal() {

    // State to store uploaded file
    const importantid = (localStorage.getItem("ob_id"))
    console.log(importantid)

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("User Input");
    const [photofile, setphotoFile] = React.useState("");

    // Handles file upload event and updates state // done
    const handleUpload = (event) => {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
        fetch("https://api.imgur.com/3/image", {
            method: "post",
            headers: {
                Authorization: "Client-ID 0dfb916cd7c1ca8"
            }
            , body: formdata
        }).then(data => data.json()).then(data => {
            console.log(data.data.link);
            alert("File Upload success");
            setphotoFile(data.data.link)
        })
    }

    //End of state i used 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    //Send the form data to the backend
    const on99 = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/edit', {
            method: "post",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name, photo: photofile, id: importantid })
        })
    }


    return (
        <div>
            <Button className="edit" onClick={handleClickOpen}>Edit Profile</Button>

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
                        id="description"
                        label="Change Name"
                        value={name}
                        type="text"
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* this is for the photo input */}
                    <Button type="file" onChange={handleUpload}> 
                    Upload Image
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={on99}>
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