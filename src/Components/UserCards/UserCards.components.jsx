import React from 'react';
import './UserCards.style.scss'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    card: {
        height: 100,
    },
    border: {
        border: '6px solid black !important'
    }
  },
}));

function UserCards() {
  const styles = useStyles();
  const avatarStyles = useDynamicAvatarStyles({ radius: 50, size: 70});
  return (
    <Row className={styles.border} p={2} gap={2} bgcolor={'#ffffff'} borderRadius={16}>
      <Item className={styles.card}>
        <Avatar
          classes={avatarStyles}
          src={
            'https://scontent-hkt1-2.xx.fbcdn.net/v/t31.0-8/10540706_10154694795505078_7172644426984438462_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=IkCXwiio55AAX93aOVM&_nc_ht=scontent-hkt1-2.xx&oh=101ddde7deb32d8a9ad820cd41ec3e14&oe=6002228D'
          }
        />
      </Item>
      <Info position={'middle'} useStyles={useTutorInfoStyles}>
        <InfoTitle>Designer Darian</InfoTitle>
        <InfoSubtitle>Member</InfoSubtitle>
      </Info>
      <Item position={'middle'}>
          <Button>Follow</Button>
      </Item>
    </Row>
  );
};


export default UserCards; 