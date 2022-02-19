import React from 'react'
import './cta.css'
import Button from '@mui/material/Button';
import {Link as LinkRouter} from 'react-router-dom'

function Cta() {
    return (
        <div className="ctadiv">
            <div className="imgbg">
            
            <h3>It’s Time to Get Carried Away</h3>
            <p>We’ve done all the prep. All you have to do is pack. Everything you need for an incredible vacation is part of the price. This includes your flight, a stay at an amazing, all-inclusive resort, private hotel transfers, and even awesome extras like excursions or special resort amenities. It’s everything you need for a perfect getaway at the perfect price.</p>
            
            <Button 
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                <LinkRouter className="navMob2" to="/Cities" >Cities</LinkRouter>
            </Button>
            </div>
        </div>
    )
}

export default Cta

