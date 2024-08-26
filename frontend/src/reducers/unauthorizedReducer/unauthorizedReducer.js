const initialState = []
const initState = 'initState'
export const unauthorizedReducer = (state = initialState, action) => {
    switch (action.type) {
        case initState:
            console.log(action.payload)
            return [...action.payload]
        default:
            return state
    }
}

export const initUnauthorizedState = (payload) => ({type: initState, payload})