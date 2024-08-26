import { initMachinesAction } from "./machineReducer";
import $api from "../../http";

export const fetchMachines = () => {
    return function(dispatch) {
        $api.get('main/machines/')
            .then(response => dispatch(initMachinesAction(response.data)))
            .catch(err => console.log(err))
    }
}