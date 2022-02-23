import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './CardCity.css'
import PaidIcon from '@mui/icons-material/Paid'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import FlagIcon from '@mui/icons-material/Flag'
import TimerIcon from '@mui/icons-material/Timer'
import imagenes from '../datos'
import TextField from '@mui/material/TextField'
import useState from 'react'
import { Button } from '@mui/material'

function CardCity() {
  return (
    <div className="cardwrapperCity">
      <div className="positionCard">
        <TextField
          
          className="inputSearch"
          id="outlined-basic"
          label="Search Cities"
          variant="outlined"
          value=""
        />

        <div className="positionCardCards">
          {imagenes.map((city) => (
            <div className="cardbodyCity">
              <img
                className="imgcardBody"
                src={process.env.PUBLIC_URL + `/img/${city.img}`}
              />

              <div className="cardtextCity">
                <h3 className="h3titlecardCity">{city.name}</h3>
                <div className="cardCityTextDisplay">
                <div className="iconCity">
                  <PaidIcon />
                  {city.currency}
                </div>
                <div className="iconCity">
                  <PeopleAltIcon /> {city.population}
                </div>
                <div className="iconCity">
                  <FlagIcon /> {city.country}
                </div>
                <div className="iconCity">
                  <TimerIcon /> {city.timezone}
                </div>
                </div>
              </div>
              <p className="reviewcardCity">
                "{city.description}"
              </p>
              <div className="btnCardCities">
              <Button variant="outlined">More information</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardCity
