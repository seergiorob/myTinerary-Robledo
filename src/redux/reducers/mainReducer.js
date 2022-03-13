import {combineReducers} from 'redux'
import ciudadesReducer from './ciudadesReducers'
// import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
    ciudadesReducer,
    itinerariesReducer,
    userReducer
    // authReducer
})

export default mainReducer