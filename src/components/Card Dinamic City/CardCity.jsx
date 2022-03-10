import React, { useEffect, useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './CardCity.css'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import {Link as LinkRouter} from "react-router-dom"
import {connect} from 'react-redux';
import ciudadesActions from '../../redux/actions/ciudadesActions'

function CardCity(props) {

  const {todasCiudades: data, filtro: search, ciudades: dataSearcheada, cargado: isLoaded} = props;
  const {filtrar, fetchearCiudades} = props;

  useEffect(()=> { 

    !isLoaded && fetchearCiudades();
  },[])

  const handleChange=e=>{
    filtrar(e.target.value.toLowerCase().trim())
  }

  return (
    <div className="cardwrapperCity">
      <div className="positionCard">
        <TextField
          
          className="inputSearch"
          id="outlined-basic"
          label="Search Cities"
          variant="outlined"
          value={search}
          onChange={handleChange}
        />

        <div className="positionCardCards">
          
          {
          !isLoaded ? (<h2>Loading..</h2>) :
          dataSearcheada.length === 0 ? (<h4>We're Sorry! We can't find any city for your search term. Please try another one.</h4>) :
          dataSearcheada?.map((city) => (
            <div className="cardbodyCity">
              {city.travelers < 4000 ? '' : (<div className="badgeCardCity">TOP DESTINATION</div>)}
              <img
                className="imgcardBody"
                src={process.env.PUBLIC_URL + `/img/${city.image}`}
              />

              <div className="cardtextCity">
                <h3 className="h3titlecardCity">{city.name}</h3>
                <div className="cardCityTextDisplay">
                <img
                className="flagCardCity"
                src={process.env.PUBLIC_URL + `/img/flags/${city.flag}`}
              />
              
                </div>
              </div>
              <p className="reviewcardCity">
                "{city.description}"
              </p>
              <div className="btnCardCities">
              <Button variant="outlined"><LinkRouter to={`Details/${city._id}`}>More Information</LinkRouter></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default connect(state => state.ciudadesReducer, ciudadesActions)(CardCity)
