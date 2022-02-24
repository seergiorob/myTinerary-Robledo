import React from 'react'
import './details.css'

function DetailsC() {
    return (
        <div className="wrapperDetails">
            
            <img className="heroDetails" src={process.env.PUBLIC_URL+ `/img/johannesburg.jpg`}/>
            <h1 className="h1tittleheroDetails">Detail City</h1>
        

        </div>
    )
}

export default DetailsC
