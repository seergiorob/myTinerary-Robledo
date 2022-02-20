import React from 'react'
import Grid from '@mui/material/Grid'
import {Link as LinkRouter} from 'react-router-dom'
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import './footer.css'

function Footer() {
    return (
        <footer className="footer">

            <Box className="boxcont" color="white" px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 10}}>
                <Container maxwidth="lg">
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                          <Box className="tittle" borderBottom="1">Quick Links</Box>
                          <Box className="quicklinks">
                              <LinkRouter className="links" to="/Home" >Home</LinkRouter>
                              <LinkRouter className="links" to="/Cities" >Cities</LinkRouter>
                          </Box>
                          
                          </Grid>
                      
                        <Grid item xs={12} sm={6}>
                          <Box className="tittle" borderBottom="1">Contact</Box>
                          <Box className="quicklinks">
                              <a className="links" href="github.com/seergiorob/"> GitHub </a>
                              <a className="links" href="linkedin.com/in/sergio-robledo-9b1a33187"> LinkedIn </a>
                          </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box> 

            {/* <Grid container spacing={1}>
              
              <Grid item xs={12} md={6}>
                  <div className="left">
                  <h4>Quick Links</h4>
                  <ul>
                      <li>
                        <LinkRouter to="/Home" >Home</LinkRouter>
                      </li>
                      <li>
                        <LinkRouter to="/Home" >Cities</LinkRouter>
                      </li>
                  </ul>
                  </div>
              </Grid> 
              <div className="right">
                  <h4>Robledo Sergio</h4>
                  <ul>
                      <li>
                        <a href="github.com/seergiorob/">GitHub</a>
                      </li>
                      <li>
                        <a href="linkedin.com/in/sergio-robledo-9b1a33187">LinkedIn</a>
                      </li>
                  </ul>
                  </div>
              <Grid item xs={12} md={6}>
                  
              </Grid>
          </Grid> */}
        </footer>
    )
}

export default Footer
