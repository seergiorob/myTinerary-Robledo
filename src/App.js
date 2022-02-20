import React from 'react';
import ResponsiveAppBar from './components/nav/Nav'
// import Gallery from './components/gallery/Gallery'
// import Hero from './components/hero/Hero.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Cities from './components/Cities/Cities'
import Footer from './components/footer/Footer'
// import Comments from './components/reviews/Comments'
// import Us from './components/us/Us'
// import Cta from './components/cta/Cta'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
// import Cardreview from './components/cardreview/Cardreview';


function App() {
  return (
    <div>
      <BrowserRouter> 
      <ResponsiveAppBar/>
      {/* <Hero/>
      <Us/>
      <Cta/>
      <Comments/> */}
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cities" element={<Cities/>}/>
      
      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;


