// import Fab from '@material-ui/core/Fab'
// <Button>Follow</Button>
// <Button>Unfollow</Button>

import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  card: {
    borderRadius: "1rem",
    // minWidth: 256,
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
    padding: "0",
    float: "left !important"
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
  followers: {
    height: '5rem !important'
  },
  padding: {
    padding: "1rem !important"
  },
  left: {
    textAlign: "left"
  }
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
  //   console.log(importantid);

  const [photofile, setphotoFile] = React.useState("");
  const [photofile2, setphotoFile2] = React.useState("");

  //description state

  const [realdescription, setRealdescription] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [havedescription, setHavedescription] = React.useState(false);
  const TMB = useSelector((state) => state.userInfoUploadStore);
  //b.success = true
  const { loading, success: success1, userInfoUploadObject } = TMB;


  //Follower Count

  const [followers, setFollowers] = React.useState(0);

  const [followers2, setFollowers2] = React.useState(0)

  //End of state i used

  //get URL
  let location = useLocation();
  const pathname = location.pathname.split("/");
  const TMusername = pathname[2];

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

  const handleUnfollow = async (e) => {
    setFollow(!follow);

    console.log(e);
    const url = e.target.baseURI;

    const pathname = new URL(url).pathname.split("/");
    const username = pathname[2];

    const ownUser = localStorage.getItem("ob_id");

    // console.log(username);

    await Axios.post("http://localhost:5000/api/unfollow", {
      username: username,
      ownUser: ownUser,
    });
  };

  const handleFollow = async (e) => {
    setFollow(!follow);


    const ownUser = localStorage.getItem("ob_id");

    console.log(e);
    const url = e.target.baseURI;


    const pathname = new URL(url).pathname.split("/");
    const username = pathname[2];
    // console.log(username);

    await Axios.post("http://localhost:5000/api/followers", {
      username: username,
      ownUser: ownUser,
    }).then((data) => {
      console.log(data);
      alert(data.data);
    });
  };

  const realdescriptionset = () => {
    setRealdescription(true);
  };

  // Handles file upload event and updates state // done
  const handleUpload = (ev) => {
    // console.log(ev.target.files);
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
        // console.log(data.data.link, importantid);
        alert("File Upload success");
        setphotoFile(data.data.link);
        dispatch(upload(data.data.link, importantid));
      });
  };

  const url = useLocation();

  useEffect(async () => {
    let c = localStorage.getItem("ob_id");
    console.log(c)

    let user = localStorage.getItem("ob_username")


    // console.log(url)

    const pathname = url.pathname.split("/");
    const username = pathname[2];
    console.log(username)

    //Count followers -> Adrian's

    if (user === username) {

      const followerGrab = await Axios.get(`http://localhost:5000/api/countFollowers/${user}`)
      console.log(followerGrab.data)

      if (followerGrab !== null || followerGrab !== undefined) {
        setFollowers2(followerGrab.data)
      } else {
        setFollowers2(0);
      }

    } else {

      const followerGrab = await Axios.get(`http://localhost:5000/api/countFollowers/${username}`)
      console.log(followerGrab.data)

      if (followerGrab !== null || followerGrab !== undefined) {
        setFollowers2(followerGrab.data)
      } else {
        setFollowers2(0);
      }
    }

    //Check if followed

    const checkFollowed = await Axios.get(`http://localhost:5000/api/checkFollowed/${username}/${c}`)
    // console.log(checkFollowed)

    let checked = checkFollowed.data
    // console.log(checked)

    if (checkFollowed !== null || checkFollowed !== undefined) {
      setFollow(checked)
    }

    //Photo
    // setRealdescription(false);
    const response = await Axios.get(`http://localhost:5000/photo/${TMusername}`);
    console.log(response);
    if (response) {
      // setHavephoto(true);
      setphotoFile(response.data[0].photo);
      setDescription(response.data[0].description);
    } else {
      setphotoFile("");
    }
  }, [success1, success2, realdescription, follow]);


  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const you = localStorage.getItem("ob_username");

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

                  {/* <input type="file" onChange={handleUpload} /> */}
                </Grid>
                <Grid item xs={12}>
                  <Avatar className={styles.avatar} src={photofile} />
                </Grid>
                <Grid item xs={12}>
                  <h3 className={styles.heading}>Designer Darian</h3>
                  <span className={styles.subheader}>Kowloon</span>
                </Grid>
              </Grid>
            </CardContent>
            <Divider light />
            <Grid item className={styles.padding} xs={12}>
              <Box display={"flex"}>
                <Grid
                  direction="row"
                  justify="center"
                  alignItems="center"
                  container
                >
                  <Grid item classes={12}>
                    <h6 className={styles.noPadding}>Followers</h6>
                    <h4>{followers2}</h4>
                  </Grid>
                </Grid>
                {/* <Box p={2} flex={"auto"} className={borderedGridStyles.item}> */}
                {render_user === you ? (
                  <div></div>
                ) : (
                    <Box p={1} flex={"auto"}>
                      {follow ? (
                        <Button
                          onClick={handleUnfollow}
                          className={styles.button}
                        >
                          Unfollow
                        </Button>
                      ) : (
                          <Box flex={"auto"}>
                            <Button
                              onClick={handleFollow}
                              className={styles.button}
                            >
                              Follow
                          </Button>
                          </Box>
                        )}
                    </Box>
                  )}
                {/* </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem varient="middle" />
        <Grid container className={styles.container} xs={6}>
          <Grid item xs={12}>
            <UserInfoModal pass={realdescriptionset} />
          </Grid>
          <Grid className={styles.left} item={12}>
              <h3>About Me</h3>
              <p>{description}</p>
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
    </Card>
  );
}

export default UserInfoCard;
