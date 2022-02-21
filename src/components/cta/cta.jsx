import React from 'react'
import './cta.css'
import {Link as LinkRouter} from 'react-router-dom'
import Grid from '@mui/material/Grid'

function Cta() {
    return (
        <div className="ctadiv">
            <Grid container sx={{my:5}} spacing={2}> 
            {/* <div className="imgbg"> */}
            <Grid item xs={12} sm={12} md={6}> 
            <div className="textdivcta">
            <h3>It’s time to get new experiences</h3>
            <p>All you have to do is pack. Everything you need for an incredible vacation is part of the price. It’s everything you need for a perfect getaway at the perfect price.</p>
            
            <button className="btncta"> 
                <LinkRouter className="navMob2" to="/Cities" >DISCOVER</LinkRouter>
            </button>
            
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}> 
            <img className="girlcta" src={process.env.PUBLIC_URL+ `/img/banner3.jpg`}/>
            </Grid>
            {/* </div> */}
            
            </Grid>
        </div>
    )
}

export default Cta

