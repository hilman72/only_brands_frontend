// import Fab from '@material-ui/core/Fab'

// <Button>Follow</Button>
// <Button>Unfollow</Button>

import React from 'react';
import Button from '@material-ui/core/Button'
import "./UserInfoCard.components.scss"
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles(({ palette }) => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        margin: 'auto'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 14,
        color: palette.grey[500],
        marginBottom: '0.875em',
    },
    statLabel: {
        fontSize: '15px !important',
        letterSpacing: 2,
        color: palette.grey[500],
        margin: 0,
    },
    statValue: {
        fontSize: '20px !important',
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}));

function UserInfoCard() {
    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '40%',
    });
    return (
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardContent>
                <Avatar className={styles.avatar} src={'https://media-exp1.licdn.com/dms/image/C5103AQFacNueL86flw/profile-displayphoto-shrink_800_800/0/1556346841861?e=1613001600&v=beta&t=e4hrgaisSOyFA5btttYksuOQ23kZGEVxGfgn2HwGZGU'} />
                <h3 className={styles.heading}>Designer Darian</h3>
                <span className={styles.subheader}>Hong Kong</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    <p className={styles.statLabel}>Followers</p>
                    <p className={styles.statValue}>6941</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    <Box p={1} flex={'auto'} className={borderedGridStyles.item}>
                        <Button>Follow</Button>
                    </Box>
                    <Box p={1} flex={'auto'} className={borderedGridStyles.item}>
                        <Button>Unfollow</Button>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
};

export default UserInfoCard;