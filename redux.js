const redux = require('redux')

// Init State
const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }

        case 'SUB':
            return {
                counter: state.counter - 1
            }

        case 'ADD_NUMBER':
            return {
                counter: state.counter + action.payload.value
            }
    }

    return state
}

// Store
const store = redux.createStore(reducer)
console.log('1', store.getState())


// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)
console.log('2', store.getState())

store.dispatch({ type: 'SUB' })
console.log('3', store.getState())


store.dispatch({ type: 'ADD_NUMBER', payload: {value: 10} })
console.log('4', store.getState())