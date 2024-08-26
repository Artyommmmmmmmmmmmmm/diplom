import { initStateAction } from "./machineReducer";
import axios from 'axios';
import $api from "../../http";

export const fetchMachines = () => {
    return function(dispatch) {
        $api.get('main/machines/')
            .then(response => dispatch(initStateAction(response.data)))
            .catch(err => console.log(err))
    }
}