import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import commentActions from '../../redux/actions/commentActions'
import './comments.css'


function Comment(props) {

    const [editComment, setEditComment] = useState(false)
    const inputEdit = useRef()
    const {id} = useParams()


    
    const handleDeleteComment = async (commentID) => {
        
        if(props.user.id){
            
            const deleteCommentawait = await props.deleteComment(props.id, commentID)
            props.fetchearItinerarioPorCiudad(id)
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
            
            props.fetchearItinerarioPorCiudad(id)
            inputEdit.current.value = ""
        }
    }

    return (
        <div>
            
            <div className="wrapperComments">
                    <div>
                        <div className="">{props.comment.userID.firstName} says:</div>

                        <div className="commentArea">
                            
                            {editComment && props.comment.userID._id === props.user.id
                            ? (<> 
                            <input ref={inputEdit} type="text" defaultValue={props.comment.comment}/>
                            <button onClick={()=> handleEditComment(props.comment._id)}>enviar edit</button>
                             </>) : <p>{props.comment.comment}</p> 
                            }

                        </div>

                        {props.user?.id === props.comment.userID._id && (
                            editComment == false && (
                            <> 
                            <button onClick={()=>setEditComment(!editComment)}>edit</button>
                            <button onClick={()=>handleDeleteComment(props.comment._id)}>delete</button>
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

