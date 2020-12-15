// import Fab from '@material-ui/core/Fab'

// <Button>Follow</Button>
// <Button>Unfollow</Button>

import React from 'react';
import "./UserInfoCard.components.scss"
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import BusinessCarousel from "../../Components/BusinessCarousel/BusinessCarousel.components"
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import BrandCards from "../../Components/BrandCards/BrandCards.components"
import { Paper } from '@material-ui/core';

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
    content: {
        padding: 24,
    },
    container: {
        width: '50%'
    },
    editButton: {
        padding: 10
    }
}));


function UserInfoCard() {
    const [follow, setFollow] = React.useState(false)
    const styles = useStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '70%',
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function handleClick() {
        setFollow(!follow)
    }

    return (
        <Card className={cx(styles.card
            , shadowStyles.root
        )}>
            <Grid container>
                <Grid container
                    xs={6}>
                    <Grid item xs={12}>
                        <CardContent>
                            <Avatar className={styles.avatar} src={'https://media-exp1.licdn.com/dms/image/C5103AQFacNueL86flw/profile-displayphoto-shrink_800_800/0/1556346841861?e=1613001600&v=beta&t=e4hrgaisSOyFA5btttYksuOQ23kZGEVxGfgn2HwGZGU'} />
                            <h3 className={styles.heading}>Designer Darian</h3>
                            <span className={styles.subheader}>Hong Kong</span>
                        </CardContent>
                        <Divider light />
                        <Grid item xs={12}>
                            <Box display={'flex'}>
                                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                                    <p className={styles.statLabel}>Followers</p>
                                    <p className={styles.statValue}>6941</p>
                                </Box>
                                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                                    <Box p={1} flex={'auto'} >
                                        {follow
                                            ? <Button onClick={handleClick}>Follow</Button>
                                            :
                                            <Box flex={'auto'}>
                                                <Button onClick={handleClick}>Followed</Button>
                                                <br />
                                                <br />
                                                <Button onClick={handleClick}>UnFollow</Button>
                                            </Box>}

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container
                    className={styles.container}
                    xs={6}>
                    <Grid item
                        className={styles.editButton}
                        xs={12}>
                        <Button className="edit" onClick={handleClickOpen}>Edit Profile</Button>
                    </Grid>
                    <Grid item={12}>
                        <CardContent className={styles.content}>
                            <TextInfoContent
                                classes={textCardContentStyles}
                                heading={'Description/Bio'}
                                body={
                                    'We are going to learn different kinds of species in nature that live together to form amazing environment.'
                                }
                            />
                        </CardContent>
                    </Grid>
                    <Grid container
                        xs={12}>
                        <p>Favourite Brands</p>
                        <Grid container xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                            <Grid item xs={4}>
                                <BrandCards />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Profile Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Details Below
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="location"
                        label="Location"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Update
          </Button>
                    <Button onClick={handleClose}>
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default UserInfoCard;