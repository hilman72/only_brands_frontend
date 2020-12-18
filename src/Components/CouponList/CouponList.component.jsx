import React, { useEffect, useState } from "react";
import "./CouponList.style.scss";
import Coupon from "../User-Coupon/Coupon.component";
import ReferalCard from "../ReferalCard/ReferalCard.component";

// tabs from material UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
  },
}));

//update seperation to  used/unused stage
const CouponList = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [cou, setCou] = useState([]);
  const [first, setFirst] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let x = props.coupon;
    if (x.length > 0) {
      setFirst(true);
    }
    if (first === true) {
      setCou([...x]);
    }
  }, [first, props.coupon]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Unexpired" {...a11yProps(0)} />
          <Tab label="Expired" {...a11yProps(1)} />
          <Tab label="Referals" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {cou && cou.length > 0 ? (
            cou.map((data, i) => {
              return (
                <Grid item xs={12} sm={6}>
                  <Coupon key={i} data={data} />
                </Grid>
              );
            })
          ) : (
            <div>Sorry No Coupon</div>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Coupon />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReferalCard />
      </TabPanel>
    </div>
  );
};

export default CouponList;
