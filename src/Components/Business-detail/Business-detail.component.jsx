import React, { useEffect } from "react";
import cx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Business-detail.style.scss";
import ChatIcon from "@material-ui/icons/Chat";
import { Typography } from "@material-ui/core";
import BusinessInfoModal from "../BusinessInfoModal/BusinessInfoModal.component";

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
    transform: 'translate(0px,-5rem)',
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
    padding: "1rem",
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
    maxHeight: '3.5rem', 
  },

  bottomRow:{
    backgroundColor: '#a4efef',
    borderRadius: '0.5rem',
    // height: '5rem',
    // margin: 
  },
  followButtonContainer:{
    padding: 0,
    margin: 0,
  },
  noPadding:{
    padding:'0 !important',
    margin:'0 !important',
  }
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    setFollow(!follow);
  }

  useEffect(() => {
    setWho(props.who);
  }, [props.who]);

  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <Grid container>
        <Grid container xs={12}>
          {/* --------- row for avatar --------- */}
          <Grid item className={styles.shrink} xs={4}>
            <Avatar
              className={styles.avatar}
              src={
                "https://image.shutterstock.com/image-photo/funny-cow-kaisergebirge-mountain-260nw-737751640.jpg"
              }
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item className={styles.editButton} xs={2}>
            <BusinessInfoModal />
          </Grid>
        </Grid>
          {/* --------- row for name and description --------- */}
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}>
            <Grid item xs={4}>
              <CardContent>
                <Typography align="center">
                  <h2 className={styles.heading}>Outback Steakhouse</h2>
                </Typography>
                <span className={styles.subheader}>Hong Kong</span>
              </CardContent>
            </Grid>
            <Grid item xs={8} >
              <CardContent className={styles.content}>
                {/* <Typography>
                  <h2 className={styles.heading}>Description/Bio</h2>
                </Typography> */}
                <Typography>
                  <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          {/* --------- row for the buttons --------- */}
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12} className={styles.bottomRow}>
            <Grid item xs={3}>
              {/* <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>Followers</p>
                <p className={styles.statValue}>6941</p>
              </Box> */}
              <Grid xs={12}>
                <h6 className={styles.noPadding}>Followers</h6>
              </Grid>
              <Grid xs={12}>
                <h4>903K</h4>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
                <Box p={1} flex={"auto"} className={styles.followButtonContainer}>
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
            </Grid>
            <Grid item xs={3}>
              <Button startIcon={<ChatIcon />} className={styles.button}>
                Chat With Us
              </Button>
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