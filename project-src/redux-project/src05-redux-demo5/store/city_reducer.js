import { SET_CITY } from "./constants";

const initState = '郑州'

const cityReducer = (state = initState, action) => {
    const {type, data} = action
    switch(type) {
        case SET_CITY:
            return data
        default:
            return state
    }
}

export default cityReducer