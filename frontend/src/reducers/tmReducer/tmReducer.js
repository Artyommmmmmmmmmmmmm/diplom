const initialState = []
const initTMs = 'initTMs'
export const tmReducer = (state = initialState, action) => {
    switch (action.type) {
        case initTMs:
            return [...action.payload]
        default:
            return state
    }
}

export const initTMsAction = (payload) => ({type: initTMs, payload})