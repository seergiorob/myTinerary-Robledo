import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './styleFacebook.css'

function FacebookSignIn(props) {

  const responseFacebook = async (res) => {
    
    const loggedUser = {
      email: res.email,
      password: res.id,
      from: "facebook"
    }
    await props.signInUser(loggedUser)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton="     Sign in on MyTinerary with Facebook"
      appId="372700684475628"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignIn);