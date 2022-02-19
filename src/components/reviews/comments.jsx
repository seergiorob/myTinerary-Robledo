import React from 'react'
import './comments.css'
import comments from '../datoscoment'

function Comments() {
    return (
        <div className="father">
            
            <div className="cardbody">
                <img className="profileimg" src="" alt=""/>
                <div className="textarea">
                <p className="comment"></p>
                <p className="name"></p>
                </div>
            </div>
            
        </div>
    )
}

export default Comments
