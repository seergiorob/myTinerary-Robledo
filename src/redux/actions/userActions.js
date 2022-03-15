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
            console.log("🚀 ~ file: userActions.js ~ line 28 ~ return ~ userData", userData)
            
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
                // localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', payload: user.data.response.userData});

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
            // localStorage.removeItem('token')
            dispatch({type: 'user', payload: null});
        }
    }
}

export default userActions;