import React, { useEffect, useState} from 'react'
import './details.css'
import {useParams} from 'react-router-dom'
import PaidIcon from '@mui/icons-material/Paid'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import FlagIcon from '@mui/icons-material/Flag'
import TimerIcon from '@mui/icons-material/Timer'
import { Button } from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"
import ControlledAccordions from "../AccordionDetails/accordionDetails"
import {connect} from 'react-redux';
import ciudadesActions from '../../redux/actions/ciudadesActions'
// import ControlledAccordions from '@components/AccordionDetails/accordionDetails'
import itineraryActions from '../../redux/actions/itineraryActions'


function DetailsC(props) {

    const {id} = useParams()
    const {todasCiudades: data, cargado: isLoaded, ciudad: city } = props;

    useEffect(()=> { 
        props.fetchearCiudad(id)
        props.fetchearCiudades()
        props.fetchearItinerarioPorCiudad(id)
      },[])
      
    return (
      <>
        <div className="wrapperDetails">

        
        <div className="positionCardCardsDetails">
          
          
          {city == null ? (<h4>We're Sorry! We can't find any City there..</h4>): (


            <div className="positionCardCardsDetails">
              <img
                className="heroDetails"
                src={process.env.PUBLIC_URL + `/img/${city.image}`}
              />
              <img
                className="flagCardCityDetails"
                src={process.env.PUBLIC_URL + `/img/flags/${city.flag}`}
              />
            <h1 className="h1tittleheroDetails">{city.name}</h1>
              <div className="cardtextCityDetails">
                <div className="cardCityTextDisplayDetails">
                <div className="iconCityDetails">
                  <PaidIcon />
                  {city.currency}
                </div>
                <div className="iconCityDetails">
                  <PeopleAltIcon /> {city.population}
                </div>
                <div className="iconCityDetails">
                  <FlagIcon /> {city.country}
                </div>
                <div className="iconCityDetails">
                  <TimerIcon /> {city.timezone}
                </div>
                </div>
              </div>
              <div className="pCityDetails">
              <p className="reviewcardCityDetails">
                "{city.description}"
              </p>
              </div>
              <div className="btnCardCitiesDetails">
              <Button variant="outlined"><LinkRouter to="/Cities"> BACK TO CITIES</LinkRouter></Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {props.itinerariosPorCiudad == null ? (<h4>We're Sorry! We can't find any City there..</h4>) : 
      props.itinerariosPorCiudad.length === 0 ? (<h4 className="itineraryNotFound">We're Sorry! We can't find any Itineraries for your City.</h4>) : 
      props.itinerariosPorCiudad.map((itinerary, index) => {
        return (
         
        <ControlledAccordions itinerary={itinerary} index={index} key={itinerary._id} />
       )})} 
        </>
      
    )
}

const mapStateToProps = (state) => {
  return {
      user: state.userReducer.user,
      message: state.userReducer.message,
      message2: state.userReducer.message2,
      ciudad: state.ciudadesReducer.ciudad,
      todasCiudades: state.ciudadesReducer.todasCiudades,
      cargando: state.ciudadesReducer.cargando,
      itinerariosPorCiudad: state.itinerariesReducer.itinerariosPorCiudad
      }
}

const mapDispatchToProps = {
  fetchearCiudades: ciudadesActions.fetchearCiudades,
  fetchearCiudad: ciudadesActions.fetchearCiudad,
  fetchearItinerarioPorCiudad: itineraryActions.fetchearItinerarioPorCiudad
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsC)
