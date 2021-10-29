import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {projectListReducer, projectDetailsReducer} from './reducers/projectReducers'
import {aboutReducer} from './reducers/aboutReducers'
import {contactReducer} from './reducers/contactReducers'

const reducer = combineReducers({
    projectList: projectListReducer,
    projectDetails: projectDetailsReducer,
    aboutinfo: aboutReducer,
    contactSend:  contactReducer
})
const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store


