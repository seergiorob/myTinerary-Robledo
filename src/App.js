import React from 'react';
import ResponsiveAppBar from './components/nav/nav.js'
import Gallery from './components/gallery/gallery'
import Hero from './components/hero/hero.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cities from './components/Cities/cities'
import Footer from './components/footer/footer'
import Comments from './components/reviews/comments'
import Us from './components/us/us'
import Cta from './components/cta/cta'


function App() {
  return (
    <div>
      <BrowserRouter> 
      <ResponsiveAppBar/>
      <Hero/>
      <Us/>
      <Cta/>
      <Comments/>
      <Routes>
      
      <Route path="/Home" element={<Gallery/>}/>
      
      <Route path="/Cities" element={<Cities/>}/>
      </Routes>
      <Footer/>  
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;


