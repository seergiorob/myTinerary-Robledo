import React, { useEffect, useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './CardCity.css'
import PaidIcon from '@mui/icons-material/Paid'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import FlagIcon from '@mui/icons-material/Flag'
import TimerIcon from '@mui/icons-material/Timer'
// import imagenes from '../datos'
import TextField from '@mui/material/TextField'
// import useState from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

function CardCity() {

  const [data, setData] = useState()
  const [search, setSearch] = useState()

console.log(data)
  useEffect(()=> { 
    axios.get(`http://localhost:4000/api/allcities`)
    .then(response=> setData(response.data.response.ciudades))

    console.log(data)
  
  },[])

  const handleChange=e=>{
    setSearch(e.target.value);
    filter(e.target.value)
  }

  const filter = (search)=>{
    let searchResult = data.filter((data) => {
      if(data.name.toLowerCase().startsWith(search.toLowerCase().trim()))
      {return data;
        
      }
    
    }
  );
  setData(searchResult)
  console.log(data)
}
  // data.filter(data => data.name.toLowerCase().startsWith(val.toLowerCase()))


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
          {data?.map((city) => (
            <div className="cardbodyCity">
              <img
                className="imgcardBody"
                src={process.env.PUBLIC_URL + `/img/${city.image}`}
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
