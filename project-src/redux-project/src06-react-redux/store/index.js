import {createStore} from 'redux'
import personReducer from './person_reducer'

export default createStore(personReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())