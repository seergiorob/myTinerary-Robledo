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
// import axios from 'axios'
import {connect} from 'react-redux';
import ciudadesActions from '../../redux/actions/ciudadesActions'

function DetailsC(props) {

    // const [data, setData] = useState([])
    // const [itinData, setItinData] = useState([])
    const {todasCiudades: data, cargado: isLoaded} = props;
    const {fetchearCiudades} = props;
    useEffect(()=> { 
        // axios.get(`http://localhost:4000/api/allcities`)
        // .then(response=> setData(response.data.response.ciudades))
    
        // console.log(data)
        !isLoaded && fetchearCiudades();
      
      },[])

      // useEffect(()=> { 
        // axios.get(`http://localhost:4000/api/allitineraries`)
        // .then(response=> setItinData(response.data.response.itineraries))
    
        
      // },[])
      
      // console.log(itinData)
      
      

    const {id} = useParams()
    const city = data.find(city=> city._id == id)
      console.log(city)

      
      // const PRUEBA = itinData.filter(city => city.city == card[0].name)

      // console.log(PRUEBA)

    return (
      <>
        <div className="wrapperDetails">
            
            
            {/* <img className="heroDetails" src={process.env.PUBLIC_URL+ `/img/johannesburg.jpg`}/>
            <h1 className="h1tittleheroDetails">Detail City</h1> */}
        
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
                {/* <h3 className="h3titlecardCity"></h3> */}
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

        <ControlledAccordions city={city}/>
        </>
    )
}

export default connect(state => state.ciudadesReducer,ciudadesActions)(DetailsC)
