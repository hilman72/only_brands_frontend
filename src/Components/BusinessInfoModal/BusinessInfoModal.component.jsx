import React from "react";
import "./BusinessInfoModal.style.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(() => ({

  icon: {
    fontSize: "5rem",
    color: "#ff4c6d",
  },
  paper: {
    borderRadius: "1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    margin: "auto",
  },
  button: {
    padding: "0.4rem",
    borderRadius: "1rem",
    backgroundColor: "#8eebdc",
    color: "white",
    border: "3px solid #ff829b",
  },
  title: {
    backgroundColor: "#8eebdc",
    margin: '0',
    padding: "0.5rem",
    paddingTop: '1rem',
    paddingBottom: '1rem',
    color: "#ffffff",
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  formContainer: {
    padding: "3rem",
  },
  lastRow:{
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    minWidth: '120',
  },
}));

function BusinessInfoModal() {
  const styles = useStyles();


  // State to store uploaded file
  const importantid = localStorage.getItem("ob_id");
  console.log(importantid);

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(true);
  const [name, setName] = React.useState("User Input");
  const [photofile, setphotoFile] = React.useState("");
  const [cate, setCate] = React.useState('');

  // Handles file upload event and updates state // done
  const handleUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("https://api.imgur.com/3/image", {
      method: "post",
      headers: {
        Authorization: "Client-ID 0dfb916cd7c1ca8",
      },
      body: formdata,
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.data.link);
        alert("File Upload success");
        setphotoFile(data.data.link);
      });
  };

  //End of state i used

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleChange = (event) => {
    console.log(event.target.value)
    setCate(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  //Send the form data to the backend

  const updatebusiness = () => {

  }

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];
  const who = localStorage.getItem("ob_who");
  const you = localStorage.getItem("ob_username");

  return (
    <div>
      {who === "business" && you === render_user ? (
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
        <DialogTitle id="form-dialog-title">ff Profile Details</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Details Below</DialogContentText>
          <FormControl variant="outlined" fullWidth>
                    <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={cate}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Cantonese</MenuItem>
                      <MenuItem value={10}>Europe</MenuItem>
                      <MenuItem value={20}>French</MenuItem>
                      <MenuItem value={30}>Indian</MenuItem>
                      <MenuItem value={40}>Italian</MenuItem>
                      <MenuItem value={50}>Japanese</MenuItem>
                      <MenuItem value={60}>Korean</MenuItem>
                      <MenuItem value={70}>Taiwanese</MenuItem>
                      <MenuItem value={80}>Thai</MenuItem>
                      <MenuItem value={90}>Other</MenuItem>
                    </Select>
                  </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updatebusiness}>Update</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BusinessInfoModal;
