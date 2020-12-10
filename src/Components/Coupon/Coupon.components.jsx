
import React from 'react';
import './Coupon.style.scss'
import cx from 'clsx';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';
import Button from '@material-ui/core/Button';

const mainColor = '#ff829b';
const lightColor = '#ff4c6d';
const borderRadius = 12;

const useStyles = makeStyles(({ palette, breakpoints }) => ({
    card: {
        overflow: 'visible',
        background: 'none',
        display: 'flex',
        minWidth: 300,
        minHeight: 120,
        filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
        '& $moveLeft, $moveRight': {
            transition: '0.3s',
        },
        '&:hover': {
            '& $moveLeft': {
                transform: 'translateX(-8px)',
            },
            '& $moveRight': {
                transform: 'translateX(8px)',
            },
        },
        [breakpoints.up('sm')]: {
            minWidth: 400,
        },
    },
    left: {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        flexBasis: '25%',
        display: 'flex',
        backgroundColor: '#fff',
    },
    media: {
        margin: 'auto',
        width: 80,
        height: 80,
        borderRadius: '50%',
    },
    right: {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        flex: 1,
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ff829b',
    },
    label: {
        padding: '2px 8px',
        backgroundColor: '#c60042'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        margin: 0,
        marginBottom: 4
    },
    subheader: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: palette.text.secondary,
        letterSpacing: 2,
        textAlign: 'left'
    },
    text: {
        fontSize: 10,
        color: palette.text.secondary,
        textAlign: 'left'
    },
    path: {
        flex: 1,
        flexBasis: 72,
        padding: '0 4px',
    },
    line: {
        position: 'relative',
        margin: '20px 0 16px',
        borderBottom: '1px dashed rgba(0,0,0,0.38)',
    },
    brandInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    moveLeft: {},
    moveRight: {},
}));

function Coupon() {
    const styles = useStyles();
    const ripStyles = useVerticalRipStyles({
        size: 24,
        rightColor: lightColor,
        tearColor: mainColor,
    });

    return (
        <Card className={styles.card} elevation={0}>
            <div className={cx(styles.left, styles.moveLeft)}>
                <CardMedia
                    className={styles.media}
                    image={
                        'https://image.shutterstock.com/z/stock-photo-funny-cow-at-the-kaisergebirge-mountain-737388658.jpg'
                    }
                />
            </div>
            <VerticalTicketRip
                classes={{
                    ...ripStyles,
                    left: cx(ripStyles.left, styles.moveLeft),
                    right: cx(ripStyles.right, styles.moveRight),
                }}
            />
            <div className={cx(styles.right, styles.moveRight)}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={styles.label}>
                            <h2 className={styles.heading}>25% Off Any Order</h2>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="brandInfo">
                        <h3 className={styles.subheader}>Outback Steakhouse</h3>
                        <p className={styles.text}>Valid from: 09/12/20 - 02/02/21</p>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className="buttonContainer">
                        <Button className="button" size="small">Details</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default Coupon;