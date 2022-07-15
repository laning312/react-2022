import {SET_PERSON_NAME, SET_PERSON_WEAPON} from './constants'

const initState = {
    name: '张飞',
    weapon: '丈八蛇矛'
}

const personReducer = (state=initState, action) => {
    const {type, data} = action
    switch(type) {
        case SET_PERSON_NAME:
            return {...state, name: data}
        case SET_PERSON_WEAPON:
            return {...state, weapon: data}
        default:
            return state
    }
}


export default personReducer