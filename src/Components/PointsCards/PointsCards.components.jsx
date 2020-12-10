

import React from 'react';
import './PointsCards.style.scss'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Column, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'

const family = 'Rubik';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 5,
    backgroundColor: '#e5fcfb',
    minWidth: 250,
  },
  learnMore: {
    backgroundColor: '#fff !important',
    color: '#fb703c',
    boxShadow: '0 2px 6px #d0efef',
    borderRadius: 12,
    minWidth: 120,
    minHeight: 42,
    fontFamily: family,
    textTransform: 'initial',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: 0,
  },
  img: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    right: 0,
    display: 'block',
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
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: '#fb703c',
      fontFamily: family,
      fontSize: '1.4rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#48bbb5',
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
        <Column gap={2} mr={2}>
          <Info position={'middle'} useStyles={useOfferInfoStyles}>
            <InfoTitle>20 Points Earned</InfoTitle>
            <InfoSubtitle>Outback Steakhouse</InfoSubtitle>
          </Info>
          <Item mt={2}>
            <Button className={styles.learnMore}>Visit Brand</Button>
          </Item>
        </Column>
        <img
          className={styles.img}
          alt={''}
          src={
            'https://www.clipartmax.com/png/full/12-127462_online-share-trading-6-star-ratings-and-award-report-reward-png.png'
          }
        />
        <div className={styles.shell} />
      </Card>
  );
}

export default PointsCard; 