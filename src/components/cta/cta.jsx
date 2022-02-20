import React from 'react'
import './cta.css'
import Button from '@mui/material/Button';
import {Link as LinkRouter} from 'react-router-dom'

function Cta() {
    return (
        <div className="ctadiv">
            <div className="imgbg">
            
            <div className="textdivcta">
            <h3>It’s time to get new experiences</h3>
            <p>All you have to do is pack. Everything you need for an incredible vacation is part of the price. It’s everything you need for a perfect getaway at the perfect price.</p>
            
            <button className="btncta"> 
                <LinkRouter className="navMob2" to="/Cities" >DISCOVER</LinkRouter>
            </button>
            
            </div>
            <img className="girlcta" src={process.env.PUBLIC_URL+ `/img/banner3.jpg`}/>
            </div>
        </div>
    )
}

export default Cta

