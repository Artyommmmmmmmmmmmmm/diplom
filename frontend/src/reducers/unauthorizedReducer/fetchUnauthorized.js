import { initUnauthorizedState } from "./unauthorizedReducer";
import axios from 'axios';
import $api from "../../http";

export const fetchUnauthorized = () => {
    return function(dispatch) {
        $api.get('main/unauthorized/')
            .then(response => dispatch(initUnauthorizedState(response.data)))
            .catch(err => console.log(err))
    }
}