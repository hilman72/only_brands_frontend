import React, { useEffect } from "react";
import cx from "clsx";
import Avatar from "@material-ui/core/Avatar";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Business-detail.style.scss";

import { Typography } from "@material-ui/core";
import BusinessInfoModal from "../BusinessInfoModal/BusinessInfoModal.component";
import CreateBrandReviewModal from "../CreateBrandsReviewModal/CreateBrandsReview.components";
import { useSelector, useDispatch } from "react-redux";
import { businessupload } from "../../Redux/Actions/BusinessPhotoaction";
import Axios from "axios";
import { useParams, useLocation } from "react-router-dom";
//new

const useStyles = makeStyles(({ palette }) => ({
  root: {
    minWidth: 1000,
    minHeight: 200,
    margin: "auto",
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    border: "4px solid #ff4c6d",
    overflow: "visible",
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    margin: "auto",
    border: "5px solid #8eebdc",
    borderRadius: "50%",
    transform: "translate(0px,-5rem)",
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
    fontSize: "15px !important",
    letterSpacing: 2,
    color: palette.grey[500],
    margin: 0,
  },
  statValue: {
    fontSize: "20px !important",
    fontWeight: "bold",
    // marginBottom: 4,
    letterSpacing: "1px",
  },
  button: {
    borderRadius: "1.5rem",
  },
  editButton: {
    padding: "0.5rem",
    borderRadius: "1rem",
    float: "right",
  },
  SMIcon: {
    height: "1rem",
    width: "1rem",
    color: "",
  },
  buttonGroup: {
    borderRadius: "1.5rem",
  },
  shrink: {
    maxHeight: "3.5rem",
  },

  bottomRow: {
    backgroundColor: "#a4efef",
    borderRadius: "0rem 0rem 0.5rem 0.5rem",
  },
  followButtonContainer: {
    padding: 0,
    margin: 0,
  },
  noPadding: {
    padding: "0 !important",
    margin: "0 !important",
  },
  imgBtn: {
    marginBottom: "4",
  },
  padding: {
    padding: "1.5rem !important",
  },
  edit: {
    padding: "0.5rem",
  },
}));

const BusinessDetail = (props) => {
  const [follow, setFollow] = React.useState(false);
  const styles = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "70%",
  });

  const [open, setOpen] = React.useState(false);
  const [who, setWho] = React.useState("");
  const [detail, setDetail] = React.useState([]);
  const [first, setFirst] = React.useState(false);
  const [businesssmallphoto, setBusinesssmallphoto] = React.useState("");
  const [followers, setFollowers] = React.useState(0);
  const importantid = localStorage.getItem("ob_id");
  const dispatch = useDispatch();

  //useSelector for redux
  const choosestore = useSelector((state) => state.businessInfoUploadStore);
  const { loading, success: success1, userInfoUploadObject } = choosestore;

  //Follower functions

  const handleUnfollow = async (e) => {
    setFollow(!follow);

    console.log(e);
    const link = e.target.baseURI;

    const pathname = new URL(link).pathname.split("/");
    const username = pathname[2];

    const ownUser = localStorage.getItem("ob_id");

    // console.log(username);

    await Axios.post("http://localhost:5000/api/unfollowBrand", {
      username: username,
      ownUser: ownUser,
    });
  };

  const handleFollow = async (e) => {
    setFollow(!follow);

    const ownUser = localStorage.getItem("ob_id");
    const link = e.target.baseURI;

    const pathname = new URL(link).pathname.split("/");
    const username = pathname[2];
    console.log(username);

    await Axios.post("http://localhost:5000/api/followBrand", {
      username: username,
      ownUser: ownUser,
    }).then((data) => {
      console.log(data);
      alert(data.data);
    });
  };

  //useLocation(url)
  let url = useLocation();
  const pathname = url.pathname.split("/");
  const TMusername = pathname[2];

  let c = localStorage.getItem("ob_id");

  let user = localStorage.getItem("ob_username");

  let whoi = localStorage.getItem("ob_who");

  useEffect(async () => {
    console.log(TMusername);
    const response = await Axios.get(
      `http://localhost:5000/api/getbusinessphoto/${TMusername}`
    );
    if (
      response &&
      response.data &&
      response.data[0] &&
      response.data[0].photo
    ) {
      setBusinesssmallphoto(
        response && response.data && response.data[0] && response.data[0].photo
      );
    } else {
      setBusinesssmallphoto("");
    }

    // console.log(url)

    const pathname = url.pathname.split("/");
    const username = pathname[2];
    console.log(username);

    //Count followers -> Adrian's

    if (user === username) {
      const followerGrab = await Axios.get(
        `http://localhost:5000/api/countBrandFollowers/${user}`
      );
      console.log(followerGrab.data);

      if (followerGrab !== null || followerGrab !== undefined) {
        setFollowers(followerGrab.data);
      } else {
        setFollowers(0);
      }
    } else {
      const followerGrab = await Axios.get(
        `http://localhost:5000/api/countBrandFollowers/${username}`
      );
      if (followerGrab !== null || followerGrab !== undefined) {
        setFollowers(followerGrab.data);
      } else {
        setFollowers(0);
      }
    }

    //Check if followed

    const checkFollowed = await Axios.get(
      `http://localhost:5000/api/checkBrandFollowed/${username}/${c}`
    );
    // console.log(checkFollowed)
    let checked = checkFollowed.data;
    console.log(checked);

    if (checkFollowed !== null || checkFollowed !== undefined) {
      setFollow(checked);
    }
  }, [success1, follow]);

  const handleBusinessPhotoUpload = (ev) => {
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
        setBusinesssmallphoto(data.data.link);
        dispatch(businessupload(data.data.link, importantid));
      });
  };

  useEffect(() => {
    setWho(props.who);
    let x = props.detail;
    if (x.length > 0) {
      setFirst(true);
    }
    if (first === true) {
      setDetail([...x]);
    }
  }, [props.who, props.detail, first]);

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <Grid container>
        <Grid container xs={12}>
          {/* --------- row for avatar --------- */}
          <Grid item className={styles.shrink} xs={4}>
            <Avatar className={styles.avatar} src={businesssmallphoto} />
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid container className={styles.edit} xs={3}>
            <Grid item xs={6}>
              <BusinessInfoModal />
            </Grid>
            <Grid item xs={6}>
              {user === TMusername ? (
                <Button className="customButton" component="label">
                  Upload Image
                  <input
                    type="file"
                    hidden
                    onChange={handleBusinessPhotoUpload}
                  />
                </Button>
              ) : (
                <div></div>
              )}
            </Grid>
          </Grid>
        </Grid>
        {/* --------- row for name and description --------- */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid item xs={4}>
            <CardContent>
              <Typography align="center">
                <h2 className={styles.heading}>
                  {detail && detail[0] && detail[0].business_name}
                </h2>
              </Typography>
              <span className={styles.subheader}>
                {detail && detail[0] && detail[0].category}
              </span>
            </CardContent>
          </Grid>
          <Grid item xs={8}>
            <CardContent className={styles.content}>
              <Typography>
                <h2 className={styles.heading}>What we're known for</h2>
              </Typography>
              <Typography>
                <p>{detail && detail[0] && detail[0].description}</p>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        {/* --------- row for the buttons --------- */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={styles.bottomRow}
        >
          <Grid item xs={3}>
            {/* <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>Followers</p>
                <p className={styles.statValue}>6941</p>
              </Box> */}
            <Grid xs={12}>
              <h6 className={styles.noPadding}>Followers</h6>
            </Grid>
            <Grid xs={12}>
              <h4>{followers}</h4>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
              <Box p={1} flex={"auto"} className={styles.followButtonContainer}>
                {user === TMusername || whoi === "business" ? (
                  <div className={styles.padding}></div>
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
                      <Button onClick={handleFollow} className={styles.button}>
                        Follow
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            {user === TMusername || whoi === "business" ? (
              <div></div>
            ) : (
              <CreateBrandReviewModal />
            )}
          </Grid>
          <Grid item xs={3}>
            <ButtonGroup
              color="primary"
              aria-label="large contained primary button group"
              variant="contained"
            >
              <Button className="button1">
                <FacebookIcon />
              </Button>
              <Button className="button2">
                <TwitterIcon />
              </Button>
              <Button className="button3">
                <InstagramIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {/* ---------------- Original Grid System ---------------- */}
      </Grid>
    </Card>
  );
};

export default BusinessDetail;
