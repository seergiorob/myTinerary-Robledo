const initialState = {
    user: null,
    message: null,
    snackbar:{view: false,
        message: '',
        success:false},

}

const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'user':
            return{
                ...state,
                user: action.payload,
            }
        case 'message':
            return{
                ...state,
                message: action.payload,
                snackbar: action.payload,  
            }


        default:
            return state
    } 
}

export default userReducer