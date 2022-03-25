import React from 'react'
import Grid from '@mui/material/Grid'
import {Link as LinkRouter} from 'react-router-dom'
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import HomeIcon from '@mui/icons-material/Home';


function Footer() {
    return (
        <footer className="footer">

            <Box className="boxcont" color="white" px={{ xs: 3, sm: 10}} py={{ xs: 5, sm: 10}}>
                <Container maxwidth="lg">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Quick Links</Box>
                          <Box className="quicklinks">
                              <LinkRouter className=" socialbrands" to="/Home" ><HomeIcon/>  Home</LinkRouter>
                              <LinkRouter className="socialbrands" to="/Cities" > <LocalAirportIcon/> Cities</LinkRouter>
                          </Box>
                          
                          </Grid>
                      
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Contact</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href=""><LocalPhoneIcon/> (011) 40323987</a>
                          <a className="socialbrands" href=""><LocationOnIcon/> Olga Cossettini 1540, CABA</a>
                          <a className="socialbrands" href=""><EmailIcon/> info@mytinerary.com</a>
                          <a className="socialbrands" href=""><WhatsAppIcon/> +5491153432342</a>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">Social Networks</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><InstagramIcon/>Instagram</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><FacebookIcon/>  Facebook</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><YouTubeIcon/>  YouTube</a>
                          <a className="socialbrands" href="https://www.instagram.com/mindhub_la/?hl=es"><TwitterIcon/>  Twitter</a>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box className="tittle" borderBottom="1">About the Author</Box>
                          <Box className="quicklinks">
                          <a className="socialbrands" href="github.com/seergiorob/"><GitHubIcon/>  @seergiorob</a>
                          <a className="socialbrands" href="linkedin.com/in/sergio-robledo-9b1a33187"><LinkedInIcon/>  Sergio Robledo</a>
                          <a className="socialbrands" href="https://twitter.com/seergiorobledo"><TwitterIcon/>  @seergiorobledo</a>
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
