import React from 'react';
import ResponsiveAppBar from './components/nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './Pages/Home'
import Cities from './Pages/Cities'


function App() {
  return (
    <div>
      <BrowserRouter> 
      <ResponsiveAppBar/>
      
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cities" element={<Cities/>}/>
      <Route path="*" element={<Home/>}/>

      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;


