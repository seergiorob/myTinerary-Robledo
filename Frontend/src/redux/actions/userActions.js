import axios from 'axios';
import Swal from 'sweetalert2'

const alertsToasts = (icon, message) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: `${icon}`,
        title: `${message}`
      })
}

const userActions = {

    signUpUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signUp', { userData })
            
            
            dispatch({type: 'message', 
            payload: {view: true,
                      message: res.data.message,
                      success: res.data.success}});
            
                    }
    },
    signInUser: (loggedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { loggedUser })
            if(user.data.success) {
                localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', payload: user.data.response.userData});

                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })

                alertsToasts('success', user.data.message)

            }else{
                console.log(user.data.message)
                
                alertsToasts('error', user.data.message)
            }
        }
    },
    SignOutUser: (closeuser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signOut', { closeuser })
            localStorage.removeItem('token')
            dispatch({type: 'user', payload: null});
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: user.data.message,
                    success: user.data.success
                }
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            //console.log(token)
            const user = await axios.get('http://localhost:4000/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            //console.log(user)

            if (user.data.success) {
                dispatch({type: 'user', payload: user.data.response});
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                })
            } else {
                localStorage.removeItem('token')
            }
        }
    }
}

export default userActions;