import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
//   InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem !important',
    boxShadow: 'none',
    minWidth: 150,
    minHeight: 150,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: 0,
      zIndex: 1,
      backgroundColor: 'rgba(255, 76, 109, 0.2) !important',
      backgroundBlendMode: 'multiply !important',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    bottom: '-1.4rem',
    right: '-1.4rem',
    display: 'block',
    zIndex: '0 !important' ,
    color:'rgba(255,255,255,0.5)',
    fontSize: '7rem',
  },
}));

export const GalaxyCardDemo = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={
            'https://source.unsplash.com/random'
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>European</InfoSubtitle>
            <InfoTitle>Frites</InfoTitle>
            {/* <InfoCaption>Perfect for everyone</InfoCaption> */}
          </Info>
        </Box>
        <RestaurantMenuRoundedIcon className={styles.icon}/>
      </Card>
  );
});
export default GalaxyCardDemo

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// //import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//         // maxWidth: '200',
//         width: '150px',
//         height: '150px',
//     },
//     media: {
//         width: '100px',
//         height: '100px',
//     },
// });

// export default function BrandCards() {
//     const classes = useStyles();

//     return (
//         <Card className={classes.root}>

//             {/* <CardMedia
//                 className={classes.media}
//                 image=""
//                 title="Contemplative Reptile"
//                 alt="This is a restaurant photo"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                     Restaurant Name
//           </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                     Restaurant Details
//           </Typography>
//             </CardContent>

//             <CardActions>

//                 <Button size="small" color="primary">
//                     Learn More
//                 </Button>
//             </CardActions> */}

//         </Card>
//     );
// }