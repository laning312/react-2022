export default (state={num: 1}, action) => {
    console.log(state, action)
    const {type, data} = action
    switch (type) {
        case 'ADD':
            return {num: state.num + data}
        case 'SUB':
            return {num: state.num - data}
        default: 
            return state
    }
}