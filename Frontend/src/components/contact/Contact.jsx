import React from 'react'
import Grid from '@mui/material/Grid'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'

function Contact() {
    return (
        <div className="contactDiv">
            <Grid container spacing={2} className="containerContact">
                <Grid item xs={12} className="tittleContact">
                    <h3>Mytinerary travel Experience</h3>
                    <p>In our company it’s the people who make a difference. Our travel experts craft the perfect trip for every traveler through our award-winning customer service. Real people helping real people. <span>Beside you every step of the way.</span></p>
                </Grid>
                <Grid item xs={12} md={12} className="iconsContact">
                    <Grid className="griditemscontact" item xs={12} sm={4}>
                    <LocalPhoneIcon className="iconcontact"/>
                    <h4>Connect by Phone</h4>
                    <p>(011) 40323987</p>
                    </Grid>
                    <Grid className="griditemscontact" item xs={12} sm={4}>
                    <LocationOnIcon className="iconcontact"/>
                    <h4>Connect in Store</h4>
                    <p>Olga Cossettini 1540, CABA</p>
                    </Grid>
                    <Grid className="griditemscontact" item xs={12} sm={4}>
                    <EmailIcon className="iconcontact"/>
                    <h4>Connect by Email</h4>
                    <p>Olga Cossettini 1540, CABA</p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
