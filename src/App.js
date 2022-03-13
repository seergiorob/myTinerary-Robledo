import React,{useEffect} from 'react';
import ResponsiveAppBar from './components/nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/footer'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import Details from './Pages/Details'
import axios from 'axios'
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';

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
      <Route path="Cities/Details/:id" element={<Details/>}/>
      <Route path="/SignUp" element={<SignUpPage/>}/>
      <Route path="/SignIn" element={<SignInPage/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;


