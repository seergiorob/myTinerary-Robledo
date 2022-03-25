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

function Likes(props) {

    const {id} = useParams()
    // console.log(id)
    const [like, setLike] = useState(0);


// console.log(props)
    // const LikesDislikes = async () => {
    //     const token = localStorage.getItem('token')
    //     const res = await axios.put(`http://localhost:4000/api/likesAndDislike/${props.id[0]}`,{},{
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     .then(res => console.log(res))
    // } 

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
                  icon: "error",
                  title: `<span>You must sign in to like this itinerary.</span>`,
                  background: "white",
                  iconColor: "red",
                  confirmButtonColor: "red",
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
