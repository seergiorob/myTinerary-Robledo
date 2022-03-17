import React from 'react';
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import './styleFacebook.css'

function FacebookSignUp(props) {

    const responseFacebook = async (res) => {

        const fullNameSplit = res.name.split(" ")
        console.log(fullNameSplit)

        let name = fullNameSplit[0]
        let lastname = fullNameSplit[1]

        console.log(res)
        const userData = {
            firstName: name,
            lastName: lastname,
            email: res.email,
            password: res.id,
            profileurl: res.picture.data.url,
            country: props.country,
            from: 'facebook'
        }
        await props.signUpUser(userData)
    }

    return (
        
        <FacebookLogin
        cssClass="buttonsocial my-facebook-button-class"
        icon="fa-facebook"
        textButton=" SignUp with Facebook"
        appId="372700684475628"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}

    />


    )
}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);

//372700684475628 id de facebook