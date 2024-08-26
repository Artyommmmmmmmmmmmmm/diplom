const initialState = []
const initMachines = 'initMachines'
export const machineReducer = (state = initialState, action) => {
    switch (action.type) {
        case initMachines:
            return [...action.payload]
        default:
            return state
    }
}

export const initMachinesAction = (payload) => ({type: initMachines, payload})

