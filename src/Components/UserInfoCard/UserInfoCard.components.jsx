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
        padding: '0.5rem',
        border:'5px solid #ff4c6d',
    },
    avatar: {
        width: 150,
        height: 150,
        margin: 'auto',
        border: '5px solid #8eebdc',
        borderRadius: '50%',
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
        fontFamily: 'MontserratMedium !important',
        fontSize: '1rem !important',
        letterSpacing: 2,
        // color: palette.grey[500],
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
        // width: '50%'
        margin: 'auto',
        padding: '0.5rem',
    },
    leftContainer:{
        padding: '0.5rem',
    },
    editButton: {
        padding: '0.5rem',
        borderRadius: '1rem',
        float: 'right',
    },
    button:{
        padding:'1rem',
        borderRadius:'1.5rem',
    },
    favBrandsContainer:{
        paddingTop:'1rem',
        overflow: 'scroll',
    },
}));


function UserInfoCard() {
    const [follow, setFollow] = React.useState(false)
    const styles = useStyles();
    const textCardContentStyles = useN01TextInfoContentStyles({

    });
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '70%',
    });
    const [open, setOpen] = React.useState(false);

    // State to store uploaded file
    const importantid = (localStorage.getItem("ob_id"))
    console.log(importantid)
    const [name, setName] = React.useState("User Input");
    const [photofile, setphotoFile] = React.useState("");

    //End of state i used 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function handleClick() {
        setFollow(!follow)
    }

    // Handles file upload event and updates state // done
    const handleUpload = (event) => {
        const formdata = new FormData()
        formdata.append("image", event.target.files[0])
        fetch("https://api.imgur.com/3/image", {
            method: "post",
            headers: {
                Authorization: "Client-ID 0dfb916cd7c1ca8"
            }
            , body: formdata
        }).then(data => data.json()).then(data => {
            console.log(data.data.link);
            alert("File Upload success");
            setphotoFile(data.data.link)
        })
    }

    //Send the form data to the backend
    const on99 = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/edit', {
            method: "post",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name, photo: photofile, id: importantid })
        })
    }

    return (
        <Card className={cx(styles.card
            , shadowStyles.root
        )}>
            <Grid container>
                <Grid container className={styles.leftContainer}
                    xs={5}>
                    <Grid item xs={12}>
                        <CardContent>
                            <Avatar className={styles.avatar} src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheblogofkevin.files.wordpress.com%2F2011%2F04%2Fdonkey-shrek-iphone-4-wallpaper-320x480.jpg&f=1&nofb=1'} />
                            <h3 className={styles.heading}>Designer Darian</h3>
                            <span className={styles.subheader}>Hong Kong</span>
                        </CardContent>
                        <Divider light />
                        <Grid item xs={12}>
                            <Box display={'flex'}>
                                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                                    <h4 className={styles.statLabel}>Followers</h4>
                                    <p className={styles.statValue}>6941</p>
                                </Box>
                                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                                    <Box p={1} flex={'auto'} >
                                        {follow
                                            ? <Button onClick={handleClick} className={styles.button}>Follow</Button>
                                            :
                                            <Box flex={'auto'}>
                                                <Button onClick={handleClick} className={styles.button}>Followed</Button>
                                                <br />
                                                <br />
                                                <Button onClick={handleClick} className={styles.button}>UnFollow</Button>
                                            </Box>}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem varient="middle"/>
                <Grid container
                    className={styles.container}
                    xs={6}>
                    <Grid item
                        xs={12}>
                        <Button className="edit" onClick={handleClickOpen} className={styles.editButton}>Edit Profile</Button>
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
                        <Divider varient="middle"/>
                    </Grid>
                  
                    <Grid container xs={12} className={styles.favBrandsContainer}>
                        <h4>Favourite Brands</h4>
                        <Grid container xs={12} spacing={2} >
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
                    {/* this is for the normal text input */}
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <br></br>
                    {/* this is for the photo input */}
                    <input type="file" onChange={handleUpload} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={on99}>
                        Update
                    </Button>
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