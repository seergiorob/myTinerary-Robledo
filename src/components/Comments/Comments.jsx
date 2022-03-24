import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import commentActions from '../../redux/actions/commentActions'
import './comments.css'
import Comment from './Comment'

function Comments(props) {

    const input = useRef()
    const {id} = useParams()


    const handleComment = async () => {
        console.log(props.user.id)
        if(props.user.id){
            let commentObj = {
                userID: props.user.id,
                comment: input.current.value
            }
            const addCommentawait = await props.addComment(commentObj, props.id)
            input.current.value = ""
            if(addCommentawait.success){
                console.log("aca va la alerta")
                props.fetchearItinerarioPorCiudad(id)
            }
        }
    }



    return (
        <div>
            {props.comments.length ? props.comments.map(comment => {
                    return (
                        <Comment key={comment._id} id={props.id} comment={comment} />
                    )
                }) : <h5 className="h5Comments">Sorry, we don't have any coments yet.</h5> }

            <div>
                
                <input ref={input} type="text"  /> 
                <button onClick={()=> {
                    if(input.current.value !== ""){
                        handleComment()
                    }else{alert("no vacio")}
                } }>Enviar</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        message: state.userReducer.message,
        message2: state.userReducer.message2
        }
}

const mapDispatchToProps = {
    addComment: commentActions.addComment,
    deleteComment: commentActions.deleteComment,
    editComment: commentActions.editComment,
    fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad
  }

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
