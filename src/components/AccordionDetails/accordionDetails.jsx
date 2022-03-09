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
import axios from 'axios'
import {connect} from 'react-redux';
import itineraryActions from '../../redux/actions/itineraryActions'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

 function ControlledAccordions(props) {

  const [expanded, setExpanded] = React.useState([]);

  
   

  // const [data, setData] = useState([])
  // const [itinData, setItinData] = useState([])

  // const {todasCiudades: data, cargado: isLoaded} = props;
  // const {fetchearCiudades} = props;

  // useEffect(()=> { 
      // axios.get(`http://localhost:4000/api/allcities`)
      // .then(response=> setData(response.data.response.ciudades))
  
      // console.log(data)
    // !isLoaded && fetchearCiudades();
    
    // },[])

    // useEffect(()=> { 
    //   axios.get(`http://localhost:4000/api/allitineraries`)
    //   .then(response=> setItinData(response.data.response.itineraries))
  
      
    // },[])
    
    // console.log(itinData)
    

    // console.log(data)
  const {id} = useParams()
  // const card = data.filter(city=> city._id == id)
  // const card = data.find(city=> city._id == id)
  //   console.log(card)
const card = props.city;
    
    // const PRUEBA = card.filter(city => city.city == card2?.name)
console.log(props)
    // console.log(PRUEBA)

    useEffect(()=> {
      props.fetchearItinerarioPorCiudad(id)
    },[])

    console.log(props.itinerariosPorCiudad)

    const bill1 = ' 💵 '
console.log(props.city)


   return (
    <div>

{props.itinerariosPorCiudad == null ? (<h4>We're Sorry! We can't find any City there..</h4>) : 
props.itinerariosPorCiudad.length === 0 ? (<h4 className="itineraryNotFound">We're Sorry! We can't find any Itineraries for your City.</h4>) : 
props.itinerariosPorCiudad.map((itinerary, index) => {
            
          return(<div key={"accordeon"+index} className="wrapperAccordionDetails">
          
        
        


      <Accordion expanded={expanded[index]} onChange={()=>{
        const newState = [...expanded];
        newState[index] = true;
        setExpanded(newState);
      } }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          
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
          <Typography className="likeDetails" fontSize={12} my={1} sx={{ color: 'text.secondary' }}> <ThumbUpIcon className="iconLike"/>Roger and 1 more like this! </Typography>
          
          </Box>
          </Grid>
          </Grid>
          </Container>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sorry! We're under construction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
      </div>
          )}
      )}


   </div>
  );
}

export default connect(state => state.itinerariesReducer, itineraryActions)(ControlledAccordions)