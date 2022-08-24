import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../Reducers/CombineReducers"

const persistState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore'))  : {}

const enhancer = applyMiddleware(thunk)

const store = createStore(
    rootReducer ,
    persistState ,
    enhancer
    )



export default store;