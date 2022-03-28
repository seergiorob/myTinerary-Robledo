import React, { useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import userActions from '../../redux/actions/userActions'
import itineraryActions from '../../redux/actions/itineraryActions'
import axios from 'axios'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'
import './likes.css'
import Swal from "sweetalert2";
import {Link as LinkRouter} from 'react-router-dom'

function Likes(props) {

    const {id} = useParams()
    const [like, setLike] = useState(0);

 

    const likesAndDislikes = async()=>{
        let likesObj
        props.likes.some(like => like === props.user.id) 
        ? (likesObj = {
            "idItinerary" : props.id[0] , 
            "idUser" : props.user.id, 
            "boolean" : false
        }) : 
        (likesObj = {
            "idItinerary" : props.id[0] , 
            "idUser" : props.user.id, 
            "boolean" : true
        }) 
        const funcLikes = await props.LikesDislikes(likesObj)
        if(funcLikes.success){
            props.fetchearItinerarioPorCiudad(id)
        }
    }


    return (
        <div>
            
            {/* <IconButton aria-label="like" onClick={likesAndDislikes} > */}
            {props.user ? (
            <IconButton aria-label="like" onClick={likesAndDislikes}>
          <ThumbUpIcon className={`iconLike ${props.likes.some((like)=> like === props.user.id) ? "colorBlue" : "colorBlack"} `}/> <span>{props.likes.length}</span>
          </IconButton> )
            :
          <IconButton aria-label="like" onClick={() =>
              Swal.fire({
                  icon: "info",
                  title: `<span>Please Sign In to leave a comment.</span>`,
                  background: "white",
                  
                })
                
            }>
          <ThumbUpIcon className="iconLike"/> <span>{props.likes.length}</span>
          </IconButton> 
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
  }
  
  const mapDispatchToProps = {
    signInUser: userActions.signInUser,
    SignOutUser: userActions.SignOutUser,
    LikesDislikes: itineraryActions.LikesDislikes,
    fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad

  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Likes);
