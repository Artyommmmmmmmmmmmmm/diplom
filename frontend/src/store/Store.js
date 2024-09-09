import {createStore, combineReducers, applyMiddleware} from 'redux';
import { machineReducer } from '../reducers/machineReducer/machineReducer';
import { complaintReducer } from '../reducers/complaintReducer/complaintReducer';
import { tmReducer } from '../reducers/tmReducer/tmReducer';
import { currentUserReducer } from '../reducers/currentUserReducer/currentUserReducer';
import { idRetrieveReducer } from '../reducers/idRetrieveReducer/idRetrieveReducer';
import { unauthorizedReducer } from '../reducers/unauthorizedReducer/unauthorizedReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    machine: machineReducer,
    complaint: complaintReducer,
    tm: tmReducer,
    user: currentUserReducer,
    id: idRetrieveReducer,
    unauthorized: unauthorizedReducer,
})

export const store = createStore(rootReducer, (applyMiddleware(thunk)))
