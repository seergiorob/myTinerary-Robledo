import React,{useEffect} from 'react';
import ResponsiveAppBar from './components/nav/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/footer'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import Details from './Pages/Details'
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import userActions from './redux/actions/userActions'
import { connect } from 'react-redux'

function App(props) {

  useEffect(() => {
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem('token')
      props.verifyToken(token)
    }
  },[])

  return (
    <div>
      <BrowserRouter> 
      <ResponsiveAppBar/>
      
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Cities" element={<Cities/>}/>
      
      <Route path="Cities/Details/:id" element={<Details/>}/>

      {!props.user && <Route path="/SignUp" element={<SignUpPage/>}/>}
      {!props.user && <Route path="/SignIn" element={<SignInPage/>}/>}

      <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
      
    </div>
    
  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
  verifyToken: userActions.verifyToken
}
const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



