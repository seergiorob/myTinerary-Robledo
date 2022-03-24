import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import itineraryActions from '../../redux/actions/itineraryActions'
import commentActions from '../../redux/actions/commentActions'
import './comments.css'

function Comments(props) {

    const [comment, setComment] = useState("")

    const {id} = useParams()

    const handleComment = async () => {
        console.log(props.user.id)
        if(props.user.id){
            console.log('enelif')
            let commentObj = {
                userID: props.user.id,
                comment: comment
            }
            const addCommentawait = await props.addComment(commentObj, props.id)
            setComment("")
            props.fetchearItinerarioPorCiudad(id)
        }
        
    }

console.log(props)

    return (
        <div>
            
            <div className="wrapperComments">
                {props.comments.length ? props.comments.map(comment => {
                    return (
                    <div>
                    <h3>{comment.userID.firstName}</h3>
                    <div className="commentArea">{comment.comment}</div>
                </div>)
                }) : <h5 className="h5Comments">Sorry, we don't have any coments yet.</h5> }
            </div>

            <div>
                <input type="text" onChange={(e)=> setComment(e.target.value) } />
                <button onClick={()=> {
                    if(comment !== ""){
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
    fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad
  }

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
