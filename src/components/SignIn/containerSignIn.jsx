import React from 'react'
import SignUp from '../SignUp/SignUp'
import SignIn from './SignIn'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import userActions from '../../redux/actions/userActions'




   

function ContainerSignIn(props) {

    function SignOut() {
        props.SignOutUser(props.user.email)
    }

    return (
        <div>
            {props.user ? <h1>Usuario conectado {props.user.firstName} desde {props.user.from[0]}</h1> : <h1>No estás logeado</h1>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {

    SignOutUser: userActions.SignOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSignIn)
