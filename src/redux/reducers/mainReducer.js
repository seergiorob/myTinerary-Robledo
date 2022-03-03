import {combineReducers} from 'redux'
import ciudadesReducer from './ciudadesReducers'
import authReducer from './authReducer'

const mainReducer = combineReducers({
    ciudadesReducer,
    authReducer
})

export default mainReducer