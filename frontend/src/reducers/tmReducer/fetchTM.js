import { initTMsAction } from "./tmReducer";
import $api from "../../http";

export const fetchTMs = () => {
    return function(dispatch) {
        $api.get('main/tms/')
            .then(response => dispatch(initTMsAction(response.data)))
            .catch(err => console.log(err))
    }
}