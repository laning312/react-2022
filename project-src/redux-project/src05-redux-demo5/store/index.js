import { createStore, combineReducers } from 'redux'
import personReducer from './person_reducer'
import cityReducer from './city_reducer'

const rootReducer = combineReducers({
    person: personReducer,
    city: cityReducer
})


export default createStore(rootReducer)