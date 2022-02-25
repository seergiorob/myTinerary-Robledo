import React,{useEffect} from 'react';
import ResponsiveAppBar from './components/nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import Details from './Pages/Details'
import axios from 'axios'

function App() {

  useEffect(()=> { 
  axios.get(`http://localhost:4000/api/allcities`)
  .then(response=> console.log(response.data.response.ciudades))

},[])

  return (
    <div>
      <BrowserRouter> 
      <ResponsiveAppBar/>
      
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cities" element={<Cities/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/Details" element={<Details/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;


