import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import ContainerSignIn from './containerSignIn'
import { Link as LinkRouter } from 'react-router-dom'
import "./signIn.css"
import FacebookSignIn from '../Facebook/FacebookSignIn'
import GoogleSignIn from '../Google/SignInGoogle'


const theme = createTheme();

function SignIn(props) {




  const handleSubmit = (event) => {
  
    event.preventDefault();
    const loggedUser = {
      email: event.target[0].value,
      password: event.target[2].value,
      from: "signup"
    }
    props.signInUser(loggedUser);
    

  };

  return (
    <div className="containerSignIn">
    <ThemeProvider theme={theme}>
      <Container   component="main" maxWidth="xs" sx={{mb: 8}}>
        
      {props.user ? 
        <ContainerSignIn/>
        :
        <>
        
        <FacebookSignIn/>
        <GoogleSignIn/>
        

        <CssBaseline />
        <Box className="cardSignIn"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            {props.user ? <img className="profileUrl" src={props.user.profileurl} alt={props.user.firstName}/> : 
            <LockOutlinedIcon /> }
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
              <LinkRouter className="" to="/SignUp" >Don't have an account? Sign Up</LinkRouter>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        </>}
      </Container>
      
    </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      message: state.userReducer.message,
      message2: state.userReducer.message2,
  }
}

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);