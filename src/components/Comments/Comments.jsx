import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import commentActions from '../../redux/actions/commentActions'
import './comments.css'
import Comment from './Comment'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from "sweetalert2";

function Comments(props) {

    const input = useRef()
    const {id} = useParams()

    const alertsToasts = (icon, message) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: `${icon}`,
            title: `${message}`
          })
    }

    const handleComment = async () => {
        
        if(props.user.id){
            let commentObj = {
                userID: props.user.id,
                comment: input.current.value
            }
            const addCommentawait = await props.addComment(commentObj, props.id)
            input.current.value = ""
            if(addCommentawait.success){
                alertsToasts('success', 'Thanks for your message')
                props.fetchearItinerarioPorCiudad(id)
            }
        }
    }



    return (
        <div className="commentsGeneralWrapper">
            {props.comments.length ? props.comments.map(comment => {
                    return (
                        <Comment key={comment._id} id={props.id} comment={comment} />
                    )
                }) : <h5 className="h5Comments">Sorry, we don't have any coments yet.</h5> }

            <div>
            
                <input ref={input} type="text"  /> 
                {/* <button onClick={()=> {
                    if(input.current.value !== ""){
                        handleComment()
                    }else{alert("no vacio")}
                } }>Enviar</button> */}

                <Button size="small" onClick={()=> {
                    if(input.current.value !== ""){
                        handleComment()
                    }else{alert("no vacio")}
                } }  variant="outlined" endIcon={<SendIcon />}>
                Send
                </Button>

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
