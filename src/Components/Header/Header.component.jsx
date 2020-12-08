import React from 'react';
import './Header.style.scss'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../../Images/logo.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  submitButton: {
    marginLeft: theme.spacing(3),
    borderRadius: theme.shape.borderRadius
  },
  filter: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const options = ['Coupons', 'Brands', 'Users'];

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  // Search filter handle dropdown

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false)
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  //Mobile menu handle dropdown (for nav icons)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
  }


  //Mobile Menu render (for nav icons)


  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <IconButton  color="inherit">
          <Badge color="secondary">
            <HomeIcon/>
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <LocalOfferIcon />
          </Badge>
        </IconButton>
        <p>Coupons</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge>
            <ExitToAppIcon />
          </Badge>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} className="Logo" alt="Logo" />

          {/* SearchBar */}

          <form onSubmit={handleSubmit} className="searchBar">
            <div className={classes.search}>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            {/* Mobile SearchBar */}

            <div className={classes.sectionMobile}>
              <IconButton edge="end" color="inherit">
                <Fab size="medium" color="primary" aria-label="add">
                <SearchIcon />
                </Fab>
              </IconButton>
            </div>

            {/* Search Filters (Dropdown) */}

            <div className={classes.filter}>
              <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                  color="primary"
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>

              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <Button type="submit" startIcon={<SearchIcon />} className={classes.submitButton}
                size="medium" variant="contained" color="primary"> Search</Button>
            </div>
          </form>

          {/* Nav Icons */}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton edge="end" color="inherit">
              <Fab size="medium" color="primary" aria-label="add">
                < HomeIcon />
              </Fab>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <Fab size="medium" color="primary" aria-label="add">
                <Badge badgeContent={17} color="secondary">
                  <LocalOfferIcon />
                </Badge>
              </Fab>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Fab size="medium" color="primary" aria-label="add">
                <AccountCircle />
              </Fab>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <Fab size="medium" color="primary" aria-label="add">
                <ExitToAppIcon />
              </Fab>
            </IconButton>
          </div>

          {/* Mobile dropdown for nav icons */}

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );

}