

import React from 'react';
import './PointsCards.style.scss'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Column, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import LoyaltyRoundedIcon from '@material-ui/icons/LoyaltyRounded';

const family = 'PeaceSans';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 5,
    backgroundColor: '#8eebdc',
    minWidth: 100,
    height: '160px',
  },
  // learnMore: {
  //   backgroundColor: '#fff !important',
  //   color: '#fb703c',
  //   boxShadow: '0 2px 6px #d0efef',
  //   borderRadius: 12,
  //   minWidth: 120,
  //   minHeight: 42,
  //   fontFamily: family,
  //   textTransform: 'initial',
  //   fontSize: '0.875rem',
  //   fontWeight: 700,
  //   letterSpacing: 0,
  // },
  icon: {
    position: 'absolute',
    bottom: '-1.4rem',
    right: '-1.4rem',
    display: 'block',
    zIndex: 0,
    color:'#c1ffff',
    fontSize: '7rem',
  },
  shell: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(70%, 50%)',
    borderRadius: '50%',
    backgroundColor: 'rgba(71, 167, 162, 0.12)',
    padding: '40%',
    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      content: '""',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: '-16%',
      backgroundColor: 'rgba(71, 167, 162, 0.08)',
    }
  },
  // h1: {
  //   fontSize:"2rem !important",
  //   color:"#ff4c6d",
  // },
  ptsTitle:{
    color: '#ff4c6d',
    fontSize: '2rem',
    margin: 0,
    zIndex: 10,
    position: 'relative',
  },
  pts:{
    color: '#ff4c6d',
    fontSize: '1rem',
    margin: 0,
    zIndex: 10,
    position: 'relative',
  },
  ptsBrand:{
    color: '#c60042',
    margin: 0,
    zIndex: 9,
    position: 'relative',
  }
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: '#ff4c6d',
      fontFamily: 'PeaceSans',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#c60042',
      fontFamily: family,
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  };
});

function PointsCard() {
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  return (
      <Card className={cx(styles.card, shadowStyles.root)}>
        <LoyaltyRoundedIcon className={styles.icon} />
        <Column gap={2}>
          <Info position={'middle'} useStyles={useOfferInfoStyles}>
            {/* <InfoTitle>20 Pts</InfoTitle>
            <InfoSubtitle>Outback Steakhouse</InfoSubtitle> */}
            <h1 className={styles.ptsTitle}>20</h1>
            <p className={styles.pts}>pts</p>
            <p className={styles.ptsBrand}>Outback Steakhouse</p>
          </Info>
          {/* <Item mt={2}>
            <Button>Visit Brand</Button>
          </Item> */}
        </Column>
        {/* <img
          className={styles.img}
          alt={''}
          src={
            'https://www.clipartmax.com/png/full/12-127462_online-share-trading-6-star-ratings-and-award-report-reward-png.png'
          }
        /> */}
        {/* <LoyaltyRoundedIcon className={styles.icon} /> */}
        <div className={styles.shell} />
      </Card>
  );
}

export default PointsCard; 