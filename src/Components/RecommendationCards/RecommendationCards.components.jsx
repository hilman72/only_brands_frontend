import React from 'react';
import './RecommendationCards.style.scss'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    padding: theme.spacing(2),
    borderRadius: 16,
  },
  media: {
    minWidth: '25%',
    maxWidth: '25%',
    flexShrink: 0,
    backgroundColor: "grey",
    borderRadius: 12,
    boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
  },

  content: {
    padding: theme.spacing(0, 2, 0, 0),
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rbga(0,0,0,0.7)',
    letterSpacing: '0.5px',
    marginBottom: 2
  },
  body: {
    fontSize: 14,
    color: "grey",
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  textFooter: {
    fontSize: 14,
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom',
  },
  smallIcon: {
    fontSize: '1rem',
    verticalAlign: 'middle',
    color: "grey",
  },
}));

function RecommendationCards() {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={2}>
      <CardContent className={styles.content}>
        <Box>
          <h3 className={styles.heading}>
            OUTBACK STEAKHOUSE
          </h3>
        </Box>
        <p className={styles.body}>
          "Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.""
          credit (www.brighttv.co.th)
        </p>
        <Divider className={styles.divider} light />
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className={styles.textFooter} component={'button'}>
            Read more <KeyboardArrowRightRounded className={styles.icon} />
          </Link>
        </Box>
      </CardContent>
      <CardMedia className={styles.media} image="https://source.unsplash.com/random"/>
    </Card>
  );
};

export default RecommendationCards;
