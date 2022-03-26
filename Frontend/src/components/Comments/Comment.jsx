import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import commentActions from '../../redux/actions/commentActions'
import './comments.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Swal from "sweetalert2";

function Comment(props) {

    const [editComment, setEditComment] = useState(false)
    const inputEdit = useRef()
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

    
    const handleDeleteComment = async (commentID) => {
        
        if(props.user.id){
            
            const deleteCommentawait = await props.deleteComment(props.id, commentID)
            
            if (deleteCommentawait.success){
                alertsToasts('success', 'Message deleted')
                props.fetchearItinerarioPorCiudad(id)
            }
        }
    }
    const handleEditComment = async (commentID) => {
        if(props.user.id){
            let editObj = {
                comment: inputEdit.current.value,
                commentId: commentID
            }
            const editCommentawait = await props.editComment(props.id, editObj)
            setEditComment(!editComment)
            if(editCommentawait.success){
                alertsToasts('success', 'Message edited')
            }
            props.fetchearItinerarioPorCiudad(id)
            inputEdit.current.value = ""
            
        }
    }

    return (
        <div>
            
            <div className="wrapperComments">
                    <div>
                        <div className="userComment">
                            <img className="profileComment" src={props.comment.userID.profileurl} alt=""/>
                            {props.comment.userID.firstName}: 
                            
                        
                        </div>

                        <div className="commentArea">
                            
                            {editComment && props.comment.userID._id === props.user.id
                            ? (<> 
                            <input  ref={inputEdit} type="text" defaultValue={props.comment.comment}/>
                            
                            
                            
                            {/* <button onClick={()=> handleEditComment(props.comment._id)}>enviar edit</button> */}
                            
                            {/* <Button onClick={()=> handleEditComment(props.comment._id)} variant="contained" endIcon={<SendIcon />}>
                            Send
                            </Button> */}

                            <IconButton onClick={()=> handleEditComment(props.comment._id)}  aria-label="send">
                            <CheckIcon />
                            </IconButton>
                            </>) : <p className="inputComment">{props.comment.comment}</p> 
                            }

                        </div>

                        {props.user?.id === props.comment.userID._id && (
                            editComment == false && (
                            <> 
                            {/* <button onClick={()=>setEditComment(!editComment)}>edit</button> */}
                            <IconButton onClick={()=>setEditComment(!editComment)}  aria-label="delete">
                            <EditIcon />
                            </IconButton>

                            
                            
                            {/* <button onClick={()=>handleDeleteComment(props.comment._id)}>delete</button> */}

                            <IconButton onClick={() => {
                      Swal.fire({
                        title: `<span style="color:black"> Do you want to delete this comment?<span>`,
                        html: `<span style="color:black"> You won't be able to revert this<span>`,
                        icon: "warning",
                        color: "black",
                        showCancelButton: true,
                        confirmButtonText: `<span style="color:black"> Yes, delete it! </span>`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                         
                          handleDeleteComment(props.comment._id);
                        } else if (
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          Swal.fire({
                            icon: "error",
                            title: `<span style="color:black">Cancelled!<span>`,
                            html: `<span style="color:black">Your comment is safe.<span>`,
                          });
                        }
                      });
                    }}  aria-label="delete">
                            <DeleteIcon />
                            </IconButton>

                            </>
                            )
                        )}
                    </div>
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

