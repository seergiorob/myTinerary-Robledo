import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
// import './styleSign.css'

function GoogleSignUp(props) {

  const responseGoogle = async (res) => {

    

    const userData = {
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        password: res.profileObj.googleId,
        profileurl: res.profileObj.imageUrl,
        country: props.country,
        from: "google"

    }
    await props.signUpUser(userData)
  }
  

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="902628312431-kr9le629t7sc6hcn75f1i3s04qrclf5c.apps.googleusercontent.com"
      buttonText="SignUp with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignUp);

//902628312431-kr9le629t7sc6hcn75f1i3s04qrclf5c.apps.googleusercontent.com
//902628312431-kr9le629t7sc6hcn75f1i3s04qrclf5c.apps.googleusercontent.com