import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import './cities.css'

function Cities() {
    return (
        <div className="cities">
            <Grid container spacing={1}>
              
                <Grid item xs={12} md={6}>
                    <div className="left">
                    <h2>Under Construction</h2>
                    <h3>Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience. </h3>
                    </div>
                </Grid> 

                <Grid item xs={12} md={6}>
                    <img className="right" src={process.env.PUBLIC_URL+ `/img/sanfrancisco.jpg`}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cities
