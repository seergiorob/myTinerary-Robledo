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

function DetailsC(props) {

    const {id} = useParams()
    const {todasCiudades: data, cargado: isLoaded, ciudad: city } = props;
    console.log("🚀 ~ file: Details.jsx ~ line 19 ~ DetailsC ~ city", city)
    
    

    const {fetchearCiudades, fetchearCiudad } = props;
    
    useEffect(()=> { 
        fetchearCiudad(id)
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

        <ControlledAccordions city={city.Itineraries}/>
        </>
      
    )
}

export default connect(state => state.ciudadesReducer,ciudadesActions)(DetailsC)
