import React from 'react'
import './comments.css'
import comments from '../datoscoment'

let commentsArray = []
commentsArray.push(comments[0],comments[1],comments[2]  )
// commentsArray.push(comments[1])
// commentsArray.push(comments[2])
console.log(commentsArray);

function Comments() {
    return (
        <>
        <h2 className="h2title">What people are saying..</h2>
        <div className="father">
            
            {commentsArray.map(user => 
            
            <div className="cardbody">
                <div className="divimg"><img className="profileimg" src={process.env.PUBLIC_URL+ `/img/profile/${user.img}`}/></div>
                <div className="textarea">
                <p className="comment">{user.comment}</p>
                <p className="name">{user.name}</p>
                </div>
            </div>
            )}
        </div>
        </>
    )
}

export default Comments
