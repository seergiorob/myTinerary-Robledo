import React from 'react'
import './cardreview.css'
import StarIcon from '@mui/icons-material/Star';
import comments from '../datoscoment'
import InstagramIcon from '@mui/icons-material/Instagram';

let commentsArray = []


comments.sort((a, b) => Math.random() - 0.5)

for(let i = 0; i < 3; i++){
    commentsArray.push(comments[i])
}

function Cardreview() {
    
    return (

        <div className="generalcard">

        <h2 className="h2titlecard">What people are saying..</h2>
        <div className="cardwrapper1">
            {commentsArray.map(user => 

            <div className="cardbody1">
                <img className="imgcard1" src={process.env.PUBLIC_URL+ `/img/${user.imgcity}`}/>
                <img className="imgcard2" src={process.env.PUBLIC_URL+ `/img/profile/${user.img}`}/>
                <a className="iglogocard" href="https://www.instagram.com/mindhub_la/?hl=es"><InstagramIcon/></a>
                <div className="cardtext">
                <h3>{user.name}</h3>
                <div className="stars">{user.rate}<StarIcon/> </div>
                <p className="reviewcardp">"{user.comment}"</p>
                </div>
            </div>
            )}
            

        </div>
        </div>
    )
}

export default Cardreview
