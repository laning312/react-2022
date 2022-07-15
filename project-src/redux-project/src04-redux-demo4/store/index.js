import {createStore} from 'redux'
import personReducer from './person_reducer'

export default createStore(personReducer)