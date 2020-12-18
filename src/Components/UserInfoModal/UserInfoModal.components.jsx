import React, { useEffect } from "react";
import "./UserInfoModal.style.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//style for the category selection
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//redux
import { useSelector, useDispatch } from "react-redux";
// import { upload } from "../../Redux/Actions/TMactions";
import Axios from "axios";
import { uploaddetails } from "../../Redux/Actions/EditNameactions";

<<<<<<< HEAD
function UserInfoModal() {
  // State to store uploaded file
  const importantid = localStorage.getItem("ob_id");
  console.log(importantid);
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("this is the bio");
  const [category, setCategory] = React.useState("");

  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleBioChange = (event) => {
    setDescription(event.target.value);
    console.log(event.target.value);
  };

  //End of state i used

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploaddetailsfunction = () => {
    dispatch(uploaddetails(category, description, importantid));
    console.log("it starts redux now");
    handleClose();
  };

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const you = localStorage.getItem("ob_username");

  //pick up the thing we got from redux store
  const breakstore = useSelector((state) => state.userInfoUploadDetailsStore);
  const { loading, success, uploadedObject } = breakstore;

  return (
    <div>
      {render_user === you ? (
        <Button className="edit" onClick={handleClickOpen}>
          Edit Profile
        </Button>
      ) : (
        <div></div>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Profile Details</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Details Below</DialogContentText>
          {/* <FormControl className={classes.formControl}>
=======
function UserInfoModal(props) {

    // State to store uploaded file
    const importantid = (localStorage.getItem("ob_id"))
    console.log(importantid)
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("")



    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        console.log(event.target.value)
    };

    const handleBioChange = (event) => {
        setDescription(event.target.value)
        console.log(event.target.value)
    }


    //End of state i used 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const uploaddetailsfunction = () => {
        dispatch(uploaddetails(category, description, importantid))
        console.log("it starts redux now")
        props.pass()
        handleClose()
    }




    //pick up the thing we got from redux store 
    const breakstore = useSelector(state => state.userInfoUploadDetailsStore);
    const { loading, success, uploadedObject } = breakstore

    return (
        <div>
            <Button className="edit" onClick={handleClickOpen}>Edit Profile</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Profile Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Details Below
            </DialogContentText>
                    {/* <FormControl className={classes.formControl}>
>>>>>>> 46c6d40ca00295951435476f37101876b113514b
                        <InputLabel id="demo-simple-select-label">favourite category </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            autoFocus
                            margin="dense"
                            id="demo-simple-select"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value={"No_preference"}>No preference</MenuItem>
                            <MenuItem value={"Italian"}>Italian</MenuItem>
                            <MenuItem value={"Chinese"}>Chinese</MenuItem>
                            <MenuItem value={"Japanese"}>Japanese</MenuItem>
                        </Select>
                    </FormControl> */}
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={handleBioChange}
          />

          {/* this is for the photo input 
                    <Button type="file" onClick={handleUpload}>
                        Upload Image
                    </Button> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={uploaddetailsfunction}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserInfoModal;
