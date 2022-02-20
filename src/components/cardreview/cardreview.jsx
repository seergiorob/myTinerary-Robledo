import React from 'react'
import './cardreview.css'

function Cardreview() {
    return (
        <div>
            <div className="cardbody1">
                <img className="imgcard1" src={process.env.PUBLIC_URL+ `/img/sydney.jpg`}/>
                <img className="imgcard2" src={process.env.PUBLIC_URL+ `/img/profile/1.jpg`}/>
                <div className="cardtext">
                <h3>Berline</h3>
                <p>Visited Berlin in November. I enjoyed it so much that I would definitely visit it again. These energetic people showed professionalism and were helpful and attending to our needs and requests in no time.</p>
                </div>
            </div>
        </div>
    )
}

export default Cardreview
