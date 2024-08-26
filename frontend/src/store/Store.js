import {createStore, combineReducers, applyMiddleware} from 'redux';
import {machineReducer} from '../reducers/machineReducer/machineReducer';
import {complaintReducer} from '../reducers/complaintReducer/complaintReducer';
import {tmReducer} from '../reducers/tmReducer/tmReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    machine: machineReducer,
    complaint: complaintReducer,
    tm: tmReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
