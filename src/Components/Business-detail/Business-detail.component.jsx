import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import "./Business-detail.style.scss";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 1000,
    minHeight: 200,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  banner: {
    minHeight: 200
  }
}));


const BusinessDetail = () => {
  const classes = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  return <div>
    <Grid container className={classes.banner} item xs={12}>
      Banner Photo
      </Grid>
    <Grid container item xs={12}>
      <Grid item xs={2}>
        Gutter
        </Grid>
      <Grid container item xs={8}>
        <Card className={classes.root}>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              <CardContent className={classes.content}>
                <TextInfoContent
                  classes={textCardContentStyles}
                  heading={'Outback Steakhouse'}
                  body={
                    'We are going to learn different kinds of species in nature that live together to form amazing environment.'
                  }
                />
              </CardContent>
            </Grid>
            <Grid item xs={4}>
              <Grid container item xs={12}>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
                <Grid item xs={3}>
                  social media icon
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={8}>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  Details
                </Grid>
                <Grid item xs={4}>
                  Chat
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              Create Coupon
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        Gutter
        </Grid>
    </Grid>
  </div>;
};

export default BusinessDetail;
