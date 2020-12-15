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
        borderRadius: '1rem',
        // minWidth: 256,
        textAlign: 'center',
        boxShadow: 'none',
        margin: 0,
        padding: '0.5rem',
    },
    avatar: {
        width: 150,
        height: 150,
        margin: 'auto',
        border: '4px solid #8eebdc',
        // transform: 'translate(0, -5rem)',
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
        // letterSpacing: 2,
        color: palette.grey[500],
        margin: 0,
    },
    statValue: {
        fontSize: '20px !important',
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
    button:{
        height: '5rem',
        width:'5rem',
        borderRadius:'50%',
    },
    divider:{
        backgroundColor: '#ff829b',
    }
}));

function UserInfoCard() {
    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '40%',
    });
    return (
        <Card className={cx(styles.card
        // ,shadowStyles.root
        )}>
            <CardContent>
                <Avatar className={styles.avatar} src={'https://media-exp1.licdn.com/dms/image/C5103AQFacNueL86flw/profile-displayphoto-shrink_800_800/0/1556346841861?e=1613001600&v=beta&t=e4hrgaisSOyFA5btttYksuOQ23kZGEVxGfgn2HwGZGU'} />
                <h3 className={styles.heading}>Designer Darian</h3>
                <span className={styles.subheader}>Hong Kong</span>
            </CardContent>
            <Divider className={styles.divider}/>
            <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    <p className={styles.statLabel}>Followers</p>
                    <p className={styles.statValue}>6941</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item} component="span">
                    <Box p={1} flex={'auto'} className={borderedGridStyles.item}>
                        <Button className={styles.button}>Follow</Button>
                        <Button className={styles.button}>Unfollow</Button>
                    </Box>
                    {/* <Box p={1} flex={'auto'} className={borderedGridStyles.item}>
                        <Button className={styles.button}>Unfollow</Button>
                    </Box> */}
                </Box>
            </Box>
        </Card>
    );
};

export default UserInfoCard;