import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import "./Business-diff-com.style.scss";
import BusinessCoupon from "../Business-Coupon/Business-Coupon.component";
import BusinessTopFans from "../Business-topfans/Business-topfans.component";
import BusinessTiers from "../Business-tiers/Business-tiers.component";
import BusinessRecom from "../Business-recom/Business-recom.component";
import CreateCoupon from "../CreateCoupon/CreateCoupon.component";
import axios from "axios";

//gg
import { useParams, useLocation } from "react-router-dom";
//new
import { displayuserownreviewonbiz } from '../../Redux/Actions/BisDisplayUserOwnReviewaction'
import { useSelector, useDispatch } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0.5rem 0.5rem 0rem 0rem",
  },
  appBar: {
    borderRadius: "0.5rem 0.5rem 0rem 0rem",
  },
}));

const BusinessDiffCom = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [coupon, setCoupon] = React.useState([]);
  const [create, setCreate] = React.useState(false);
  const [who, setWho] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const whenCreate = () => {
    setCreate(true);
  };

  const x = window.location.href.replaceAll("/", " ").split(" ");
  const render_user = x[x.length - 1];

  const you = localStorage.getItem("ob_username");
  const dispatch = useDispatch();

  //new
  let url = useLocation();
  const pathname = url.pathname.split("/");
  const TMusername = pathname[2];
  const importantid = localStorage.getItem("ob_id");



  //for useselector for own review 
  const breakdownreviewstore = useSelector((state) => state.getUserOwnReviewToBizStore);
  const { loading: loadingreview, success: success4, realuploadedObject } = breakdownreviewstore


  useEffect(() => {
    //TRY for own review 
    dispatch(displayuserownreviewonbiz(TMusername, importantid))
    setWho(props.who);
    axios
      .get(`http://localhost:5000/api/getCoupon/${render_user}`)
      .then((data) => {
        let x = data.data;
        setCoupon([...x]);
      });
  }, [create, props.who, render_user]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Coupons" {...a11yProps(0)} />
          <Tab label="Top Fans" {...a11yProps(1)} />
          <Tab label="Tier of Awards " {...a11yProps(2)} />
          <Tab label="Recommendations by Fans " {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {who === "business" && you === render_user ? (
            <Grid item xs={12}>
              <CreateCoupon create={whenCreate} />
            </Grid>
          ) : (
            <div></div>
          )}

          <Grid item xs={12}>
            <BusinessCoupon coupon={coupon} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BusinessTopFans />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BusinessTiers />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BusinessRecom data={realuploadedObject} />
      </TabPanel>
    </div>
  );
};

export default BusinessDiffCom;
