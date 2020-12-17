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

  useEffect(() => {
    let x = localStorage.getItem("ob_id");
    setWho(props.who);
    fetch(`http://localhost:5000/api/getCoupon/${x}`)
      .then((res) => res.json())
      .then((data) => {
        setCoupon([...data]);
      });
  }, [create, props.who]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Coupons" {...a11yProps(0)} />
          <Tab label="Top Fans" {...a11yProps(1)} />
          <Tab label="Tier of Awards " {...a11yProps(2)} />
          <Tab label="Recommendations by Fans " {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {who === "business" ? (
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
        <BusinessRecom />
      </TabPanel>
    </div>
  );
};

export default BusinessDiffCom;
