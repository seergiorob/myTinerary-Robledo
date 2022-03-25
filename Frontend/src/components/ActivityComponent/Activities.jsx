import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { connect } from 'react-redux'
import activityActions from '../../redux/actions/activityActions'
import './activityCSS.css'

function Activities(props) {



    const [activity, setActivity ] = useState([])
    console.log("🚀 ~ file: Activities.jsx ~ line 14 ~ Activities ~ activity", activity)

    
    useEffect(()=>{
        props.activityForEachItinerary(props.id)
        .then(res => setActivity(res.response))
    },[])


    return (
        
        <div >
            <Grid container spacing={2}>  
            {activity.map(activity => {

                return (<Grid item xs={12} lg={4} key={activity._id}>

                        <div className="wrapperActivity">
                        <h5 className="h5Activity">{activity.title}</h5>
                        <Box
                        component="img"
                        sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 180, md: 250 },
                        maxWidth: { xs: 280, md: 300 },
                        
                        }}
                        alt={activity.title}
                        src={process.env.PUBLIC_URL + `/img/activities/${activity.img}`}
                        />
                        
                        </div>
                    {/* <img className="imgActivity" src={process.env.PUBLIC_URL + `/img/activities/${activity.img}`} alt={activity.title}/> */}

                </Grid>)
            })}

            </Grid>
        </div>


    )
}

const mapDispatchToProps = {
    activityForEachItinerary: activityActions.activityForEachItinerary
}

export default connect(null, mapDispatchToProps)(Activities)
