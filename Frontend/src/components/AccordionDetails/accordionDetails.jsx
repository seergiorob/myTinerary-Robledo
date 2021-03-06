import React, { useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordionDetails.css';
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux';
import itineraryActions from '../../redux/actions/itineraryActions'
import Likes from '../LikesComponent/Likes'
import Activities from '../ActivityComponent/Activities'
import Comments from '../Comments/Comments'
import ciudadesActions from '../../redux/actions/ciudadesActions'

 function ControlledAccordions(props) {

  const [expanded, setExpanded] = React.useState([]);

  const {id} = useParams()

    useEffect(()=> {
      props.fetchearItinerarioPorCiudad(id)
      props.fetchearCiudades()
    },[])

    const bill1 = ' 💵 '

    const {itinerary, index} = props


  return (
    <div>

{/* {props.itinerariosPorCiudad == null ? (<h4>We're Sorry! We can't find any City there..</h4>) : 
props.itinerariosPorCiudad.length === 0 ? (<h4 className="itineraryNotFound">We're Sorry! We can't find any Itineraries for your City.</h4>) : 
props.itinerariosPorCiudad.map((itinerary, index) => { */}
          
          {/* return( */}
            <div key={"accordeon"+index} className="wrapperAccordionDetails">
          
      <Accordion 
      expanded={expanded[index]} 
      onChange={()=>{
        const newState = [...expanded];
        newState[index] = true;
        setExpanded(newState);
      } }
      
      >
        <div>
          
          <Container maxwidth="lg">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={4} >
          <Box className="boxDetails" sx={{}}>
            <img className="imgDetails" src={process.env.PUBLIC_URL + `/img/itineraries/${itinerary.imgItinerary}`}/>
          </Box>
          </Grid>
          <Grid item xs={12} lg={8} >
          <Box className="headerDetailsCard" sx={{}}>
          <Box className="itineraryDetail"> 
          <Typography mx={0} sx={{ color: 'text.secondary' }}>Duration: {itinerary.duration}.</Typography>
          <Typography mx={0} sx={{ color: 'text.secondary' }}>Price: {bill1.repeat(itinerary.price)}</Typography>
          
          </Box> 
          <Box className="profileDetails"> 
            <img className="imgProfileDetails" src={process.env.PUBLIC_URL + `/img/profile/${itinerary.image}`}/>
            <Typography mx={1} sx={{ color: 'text.secondary' }}>{itinerary.name}.</Typography>
            </Box>
          </Box>
          <Typography my={1} sx={{ color: 'text.secondary', fontWeight: 'bold' }}>{itinerary.itinerary}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{itinerary.itineraryDesc}</Typography>
          <Box className="bottomDetails"> 
          <Typography className="hashDetails" fontSize={12} my={1} sx={{ color: 'text.secondary' }}>{itinerary.hashtags}</Typography>
          
          <Likes id={[itinerary._id]} likes={itinerary.likes} />
          {/* {console.log(itinerary)} */}
          
          </Box>
          </Grid>
          </Grid>
          </Container>
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1bh-content"
          // id="panel1bh-header"
        sx={{
          pointerEvents: "none"
        }}
        expandIcon={
          <ExpandMoreIcon sx={{
            pointerEvents: "auto"
          }} />
        }
        >
        </AccordionSummary>
        
        </div>
        <AccordionDetails>

        <Activities id={itinerary._id} />
        <Comments id={itinerary._id} comments={itinerary.comments} />


        </AccordionDetails>
      </Accordion>
      
      
      </div>
          {/* )} */}
      {/* )} */}


  </div>
  );
}

const mapDispatchToProps = {
  fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad,
  fetchearCiudades: ciudadesActions.fetchearCiudades
}


export default connect(state => state.itinerariesReducer, mapDispatchToProps)(ControlledAccordions)