// 生产action
// {type: '', data: xxx}

// { type: 'ADD', data: v }
// function addAction(data) {
//     return {
//         type: 'ADD',
//         data
//     }
// }

const addAction = data => ({type: 'ADD', data})

// { type: 'SUB', data: v}
// function subAction(data) {
//     return {
//         type: 'SUB',
//         data
//     }
// }

const subAction = data => ({type: 'SUB', data})

export {
    addAction,
    subAction
}