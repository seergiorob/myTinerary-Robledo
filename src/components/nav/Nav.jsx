import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import "./nav.css"
import userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux'

const pages = ['Home', 'Cities'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
console.log("🚀 ~ file: Nav.jsx ~ line 24 ~ ResponsiveAppBar ~ props", props)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{boxShadow: "none"}} position="static" className="hola" color="transparent">
      <Container maxWidth="xl" className="hola">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'white' } }}
          >
            MyTinerary
          </Typography>
          {/* aca edito hamburguesa */}
          <Box sx={{ flexGrow: 1, color: 'white', display: { xs: 'flex', md: 'none' } }}> 
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'} 
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem> */}
                <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="navMob" to="/Home" >Home</LinkRouter>
              </Button>
                <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="navMob" to="/Cities" >Cities</LinkRouter>
              </Button>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'white'} }}
          >
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                <LinkRouter className="nav" to="/Home" >Home</LinkRouter>
              </Button>
                
          
          <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <LinkRouter className="nav" to="/Cities" >Cities</LinkRouter>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white'  }}>
                {/* <Avatar alt="Sergio Robledo" src="/static/images/avatar/1.jpg" /> */}
                {props.user ? <img className="profileUrlnav" src={props.user.profileurl} alt={props.user.firstName}/> : 
            <PersonIcon/> }
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem onClick={handleCloseUserMenu}>
                <LinkRouter className="" to="/SignIn" > <Typography textAlign="center">Sign In</Typography> </LinkRouter>
                  
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                <LinkRouter className="" to="/SignUp" > <Typography textAlign="center">Sign Up</Typography> </LinkRouter>
                  
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
  }
}

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveAppBar);
