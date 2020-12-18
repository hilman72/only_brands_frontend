// import Fab from '@material-ui/core/Fab'
// <Button>Follow</Button>
// <Button>Unfollow</Button>

import React, { useEffect } from "react";
import "./UserInfoCard.components.scss";
import cx from "clsx";

import BrandCards from "../../Components/BrandCards/BrandCards.components";
import { Paper, Typography } from "@material-ui/core";
import UserInfoModal from "../UserInfoModal/UserInfoModal.components";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components";
import TextInfoContent from "@mui-treasury/components/content/textInfo";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
//TM REDUX ,selector is to grab store data to state
import { useSelector, useDispatch } from "react-redux";
import { upload } from "../../Redux/Actions/TMactions";
import Axios from "axios";

//new updates
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(({ palette }) => ({
<<<<<<< HEAD
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    padding: "0.5rem",
    border: "5px solid #ff4c6d",
  },
  avatar: {
    width: 150,
    height: 150,
    margin: "auto",
    border: "5px solid #8eebdc",
    borderRadius: "50%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontFamily: "MontserratMedium !important",
    fontSize: "1rem !important",
    letterSpacing: 2,
    // color: palette.grey[500],
    margin: 0,
  },
  statValue: {
    fontSize: "20px !important",
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  content: {
    padding: 24,
  },
  container: {
    margin: "auto",
  },
  leftContainer: {},
  editButton: {
    padding: "0.5rem",
    borderRadius: "1rem",
    float: "right",
  },
  button: {
    padding: "1rem",
    borderRadius: "1.5rem",
  },
  favBrandsContainer: {
    paddingTop: "1rem",
    overflow: "scroll",
  },
  noPadding: {
    padding: "0 !important",
    margin: "0 !important",
  },
  imgBtn: {
    float: "left",
  },
}));

function UserInfoCard() {
  // for the problem of potentially undefined photo(useEffect)
  const [havephoto, setHavephoto] = React.useState(false);
  const [follow, setFollow] = React.useState(false);
  const styles = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles({});

  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "70%",
  });

  const [open, setOpen] = React.useState(false);
  //TM
  const dispatch = useDispatch();

  // State to store uploaded file
  const importantid = localStorage.getItem("ob_id");
  console.log(importantid);

  const [photofile, setphotoFile] = React.useState("");
  const [photofile2, setphotoFile2] = React.useState("");

  //description state
  const [description, setDescription] = React.useState("");
  const [havedescription, setHavedescription] = React.useState(false);
  const TMB = useSelector((state) => state.userInfoUploadStore);
  //b.success = true
  const { loading, success: success1, userInfoUploadObject } = TMB;

  //End of state i used

  //another store
  const breakdescription = useSelector(
    (state) => state.userInfoUploadDetailsStore
  );
  const {
    loading: loading2,
    sucess: success2,
    uploadedObject: description2,
  } = breakdescription;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    setFollow(!follow);
  }

  // Handles file upload event and updates state // done
  const handleUpload = (ev) => {
    console.log(ev.target.files);
    const formdata = new FormData();
    formdata.append("image", ev.target.files[0]);
    fetch("https://api.imgur.com/3/image", {
      method: "post",
      headers: {
        Authorization: "Client-ID 0dfb916cd7c1ca8",
      },
      body: formdata,
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.data.link, importantid);
        alert("File Upload success");
        setphotoFile(data.data.link);
        dispatch(upload(data.data.link, importantid));
      });
  };

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const you = localStorage.getItem("ob_username");

  useEffect(async () => {
    let c = localStorage.getItem("ob_id");
    const response = await Axios.get(`http://localhost:5000/photo/${c}`);
    console.log(response);
    if (response !== null || response !== undefined) {
      setHavephoto(true);
      setphotoFile(response.data[0].photo);
    } else {
      setphotoFile("");
    }
    const response2 = await Axios.get(
      `http://localhost:5000/textdescription/${c}`
    );
    console.log(response2.data[0].description);
    if (response2 !== null || response2 !== undefined) {
      setHavedescription(true);
      setDescription(response2.data[0].description);
=======
    card: {
        borderRadius: '1rem',
        // minWidth: 256,
        textAlign: 'center',
        padding: '0.5rem',
        border: '5px solid #ff4c6d',
    },
    avatar: {
        width: 150,
        height: 150,
        margin: 'auto',
        border: '5px solid #8eebdc',
        borderRadius: '50%',

    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 14,
        color: palette.grey[500],
        marginBottom: '0.875em',
    },
    statLabel: {
        fontFamily: 'MontserratMedium !important',
        fontSize: '1rem !important',
        letterSpacing: 2,
        // color: palette.grey[500],
        margin: 0,
    },
    statValue: {
        fontSize: '20px !important',
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
    content: {
        padding: 24,
    },
    container: {
        margin: 'auto'
    },
    leftContainer: {
    },
    editButton: {
        padding: '0.5rem',
        borderRadius: '1rem',
        float: 'right',
    },
    button: {
        padding: '1rem',
        borderRadius: '1.5rem',
    },
    favBrandsContainer: {
        paddingTop: '1rem',
        overflow: 'scroll',
    },
    noPadding: {
        padding: '0 !important',
        margin: '0 !important',
    },
    imgBtn: {
        float: 'left'
    }

}));

function UserInfoCard() {

    // for the problem of potentially undefined photo(useEffect)
    const [havephoto, setHavephoto] = React.useState(false)
    const [follow, setFollow] = React.useState(false)
    const styles = useStyles();
    const textCardContentStyles = useN01TextInfoContentStyles({});


    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: "rgba(0, 0, 0, 0.08)",
        height: "70%",
    });


    const [open, setOpen] = React.useState(false);
    //TM
    const dispatch = useDispatch();

    // State to store uploaded file
    const importantid = localStorage.getItem("ob_id");
    console.log(importantid);

    const [photofile, setphotoFile] = React.useState("");
    const [photofile2, setphotoFile2] = React.useState("");

    //description state

    const [realdescription, setRealdescription] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [havedescription, setHavedescription] = React.useState(false);
    const TMB = useSelector((state) => state.userInfoUploadStore);
    //b.success = true
    const { loading, success: success1, userInfoUploadObject } = TMB;

    //End of state i used

    //another store
    const breakdescription = useSelector(state => state.userInfoUploadDetailsStore)
    const { loading: loading2, sucess: success2, uploadedObject: description2 } = breakdescription


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = async (e) => {
        setFollow(!follow);

        console.log(e)
        const url = e.target.baseURI

        const pathname = new URL(url).pathname.split('/');
        const username = pathname[2]
        console.log(username)
    }
    
    const realdescriptionset = () => {
        setRealdescription(true);
    }

        await Axios.post('http://localhost:5000/api/followers', { username: username})
    }



    // Handles file upload event and updates state // done
    const handleUpload = (ev) => {
        console.log(ev.target.files)
        const formdata = new FormData()
        formdata.append("image", ev.target.files[0])
        fetch("https://api.imgur.com/3/image", {
            method: "post",
            headers: {
                Authorization: "Client-ID 0dfb916cd7c1ca8"
            }
            , body: formdata
        }).then(data => data.json()).then(data => {
            console.log(data.data.link, importantid);
            alert("File Upload success");
            setphotoFile(data.data.link)
            dispatch(upload(data.data.link, importantid))
        })
>>>>>>> 46c6d40ca00295951435476f37101876b113514b
    }
  }, [success1, success2]);

  //Send the form data to the backend
  //const on99 = async (e) => {
  //e.preventDefault();
  //TM
  //dispatch(upload(name, photofile, importantid));

  //redux TM actions
  //let a = await fetch('http://localhost:5000/edit/', {
  //    method: "post",
  //    headers: { 'content-type': 'application/json' },
  //    body: JSON.stringify({ name: name, photo: photofile, id: importantid })
  //})
  //console.log(a)

  //}

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <Grid container>
        <Grid container className={styles.leftContainer} xs={5}>
          <Grid item xs={12}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  {render_user === you ? (
                    <Button className={styles.imgBtn} component="label">
                      Upload Image
                      <input type="file" hidden onChange={handleUpload} />
                    </Button>
                  ) : (
                    <div></div>
                  )}

<<<<<<< HEAD
                  {/* <input type="file" onChange={handleUpload} /> */}
                </Grid>
                <Grid item xs={12}>
                  <Avatar className={styles.avatar} src={photofile} />
=======
    useEffect(async () => {
        setRealdescription(false);
        let c = localStorage.getItem("ob_id");
        const response = await Axios.get(`http://localhost:5000/photo/${c}`);
        console.log(response)
        if (response !== null || response !== undefined) {
            setHavephoto(true);
            setphotoFile(response.data[0].photo);
        }
        else { setphotoFile("") }

        const response2 = await Axios.get(`http://localhost:5000/textdescription/${c}`);
        console.log(response2.data[0].description)
        if (response2 !== null || response2 !== undefined) {
            setHavedescription(true);
            setDescription(response2.data[0].description);
        }


    }, [success1, success2, realdescription])

    //Send the form data to the backend
    //const on99 = async (e) => {
    //e.preventDefault();
    //TM 
    //dispatch(upload(name, photofile, importantid));

    //redux TM actions
    //let a = await fetch('http://localhost:5000/edit/', {
    //    method: "post",
    //    headers: { 'content-type': 'application/json' },
    //    body: JSON.stringify({ name: name, photo: photofile, id: importantid })
    //})
    //console.log(a)


    //}


    return (
        <Card className={cx(styles.card
            , shadowStyles.root
        )}>
            <Grid container>
                <Grid container className={styles.leftContainer}
                    xs={5}>
                    <Grid item xs={12}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Button
                                        className={styles.imgBtn}
                                        component="label"
                                    >
                                        Upload Image
                                     <input
                                            type="file"
                                            hidden
                                            onChange={handleUpload}
                                        />
                                    </Button>
                                    {/* <input type="file" onChange={handleUpload} /> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Avatar className={styles.avatar}
                                        src={photofile} />
                                </Grid>
                                <Grid item xs={12}>
                                    <h3 className={styles.heading}>Designer Darian</h3>
                                    <span className={styles.subheader}>Kowloon</span>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Divider light />
                        <Grid item xs={12}>
                            <Box display={'flex'}>
                                <Grid
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    container>
                                    <Grid item xs={12}>
                                        <h6 className={styles.noPadding}>Followers</h6>
                                        <h4>903K</h4>
                                    </Grid>
                                </Grid>
                                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                                    <Box p={1} flex={'auto'} >
                                        {follow
                                            ? <Button onClick={handleClick} className={styles.button}>Follow</Button>
                                            :
                                            <Box flex={'auto'}>
                                                <Button onClick={handleClick} className={styles.button}>UnFollow</Button>
                                            </Box>}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem varient="middle" />
                <Grid container
                    className={styles.container}
                    xs={6}>
                    <Grid item
                        xs={12}>
                        <UserInfoModal pass={realdescriptionset} />
                    </Grid>
                    <Grid item={12}>
                        <CardContent className={styles.content}>
                            <TextInfoContent
                                classes={textCardContentStyles}
                                heading={'About Me'}
                            />
                            <h2>{description}</h2>
                        </CardContent>
                        <Divider varient="middle" />
                    </Grid>

                    <Grid container xs={12} className={styles.favBrandsContainer}>
                        <Typography variant="h4" gutterBottom>
                            <h4>Favourite Brands</h4>
                        </Typography>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                        </Grid>
                    </Grid>
>>>>>>> 46c6d40ca00295951435476f37101876b113514b
                </Grid>
                <Grid item xs={12}>
                  <h3 className={styles.heading}>Designer Darian</h3>
                  <span className={styles.subheader}>Kowloon</span>
                </Grid>
              </Grid>
            </CardContent>
            <Divider light />
            <Grid item xs={12}>
              <Box display={"flex"}>
                <Grid
                  direction="row"
                  justify="center"
                  alignItems="center"
                  container
                >
                  <Grid item xs={12}>
                    <h6 className={styles.noPadding}>Followers</h6>
                    <h4>903K</h4>
                  </Grid>
                </Grid>
                <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                  <Box p={1} flex={"auto"}>
                    {follow ? (
                      <Button onClick={handleClick} className={styles.button}>
                        Follow
                      </Button>
                    ) : (
                      <Box flex={"auto"}>
                        <Button onClick={handleClick} className={styles.button}>
                          Followed
                        </Button>
                        <br />
                        <br />
                        <Button onClick={handleClick} className={styles.button}>
                          UnFollow
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem varient="middle" />
        <Grid container className={styles.container} xs={6}>
          <Grid item xs={12}>
            <UserInfoModal />
          </Grid>
          <Grid item={12}>
            <CardContent className={styles.content}>
              <TextInfoContent
                classes={textCardContentStyles}
                heading={"About Me"}
              />
              <h2>{description}</h2>
            </CardContent>
            <Divider varient="middle" />
          </Grid>

          <Grid container xs={12} className={styles.favBrandsContainer}>
            <Typography variant="h4" gutterBottom>
              <h4>Favourite Brands</h4>
            </Typography>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={4}>
                <BrandCards />
              </Grid>
              <Grid item xs={4}>
                <BrandCards />
              </Grid>
              <Grid item xs={4}>
                <BrandCards />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">gg Profile Details</DialogTitle>
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

                    <br></br>
                    this is for the photo input
                    <input type="file" onChange={handleUpload} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={on99}>
                        wtf
                    </Button>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog> */}
<<<<<<< HEAD
    </Card>
  );
=======
        </Card>
    );
>>>>>>> 46c6d40ca00295951435476f37101876b113514b
}

export default UserInfoCard;
