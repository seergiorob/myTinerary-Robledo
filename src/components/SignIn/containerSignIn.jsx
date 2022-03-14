import React from 'react'
import SignUp from '../SignUp/SignUp'
import SignIn from './SignIn'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import userActions from '../../redux/actions/userActions'
import "./containerSignIn.css"


function ContainerSignIn(props) {

    function SignOut() {
        props.SignOutUser(props.user.email)
    }

    return (
        <div className="containerBarInfo">
            {props.user ? <div className="barInfo"> <h6>User logged in {props.user.firstName} from {props.user.from[0]}</h6></div> : <div className="barInfo"><h6>You're not logged in.</h6></div>}
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
