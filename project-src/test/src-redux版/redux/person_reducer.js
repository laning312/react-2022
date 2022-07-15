
const initState = {
    name: '关羽',
    weapon: '青龙偃月刀'
}
const  personReducer = (state=initState, action) => {
    const {type, data} = action
    console.log(type, data)
    switch(type) {
        case 'SET_NAME':
            return {
                ...state,
                name: data
            }
        case 'SET_WEAPON':
            return {
                ...state,
                weapon: data
            }
        default:
            return state
    }
}

export {
    personReducer
}