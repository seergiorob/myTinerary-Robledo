import * as React from 'react'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import countries from '../datospaises'
import userActions from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import Swal from 'sweetalert2'
import Snackbar from '../Snackbar/Snackbar';

const theme = createTheme()

function SignUp(props) {

  const handleSubmit = (event) => {
  
    event.preventDefault()

    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[2].value,
      email: event.target[4].value,
      password: event.target[6].value,
      profileurl: event.target[8].value,
      country: event.target[10].value,
      from: 'signup'
    }
    props.signUpUser(userData)

    }

    // const [email, setEmail] = useState('')
    // console.log("🚀 ~ file: SignUp.jsx ~ line 57 ~ SignUp ~ email", email)

    
    
    console.log("🚀 ~ file: SignUp.jsx ~ line 43 ~ SignUp ~ props.message", props.message)
   


    
    
  

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{mb: 4}}>
    
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Pleas register your account.
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // value={email}
                  // onChange={e=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="profileurl"
                  label="Add your url with your best photo!"
                  name="profileurl"
                />
              </Grid>
              
              <Grid item xs={12}>
              
              <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
           
            <Select
            labelId="country"
            id="country"
            //value={}
    
            label="Country"
            //onChange={}
            >
            
            {
        countries.map((item) => (
          
            <MenuItem value={item.country} key={item.country}>{item.country}</MenuItem>
            
            ))}
            </Select>
          
            </FormControl>
            
              </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive information about promotions, new destinations and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <LinkRouter className="" to="/SignIn" >Already have an account? Sign In</LinkRouter>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar/>
      </Container>
    </ThemeProvider>

  )
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
}
const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
    message2: state.userReducer.message2,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);