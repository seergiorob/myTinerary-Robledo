import {combineReducers} from 'redux'
import ciudadesReducer from './ciudadesReducers'
// import authReducer from './authReducer'
import itinerariesReducer from './itinerariesReducer'

const mainReducer = combineReducers({
    ciudadesReducer,
    itinerariesReducer,
    // authReducer
})

export default mainReducer