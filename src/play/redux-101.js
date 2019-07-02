import {createStore} from 'redux'

const incCount = ({ incBy = 1} = {}) => ({
    type: 'INCREMENT',
    incBy
})


const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incBy}
        case 'DECREMENT':
            return { count: state.count - 1}
        case 'RESET':
            return { count: 0}
        default:
            return state
    }
})

const unsubs = store.subscribe(() => {
    console.log(store.getState())
})



// Inc Count
store.dispatch(incCount())
// store.dispatch({
//     type: 'DECREMENT'
// })

// unsubs()

// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'RESET'
// })
console.log(store.getState())