import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';


function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
      console.log(res)
     const loggedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(loggedUser)
  }

  return (
    <GoogleLogin
    className="buttonsocial"
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
      buttonText="Sign in on MyTinerary with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
    signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);