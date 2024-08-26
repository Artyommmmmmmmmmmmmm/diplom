import { initComplaintsAction } from "./complaintReducer";
import $api from "../../http";

export const fetchComplaints = () => {
    return function(dispatch) {
        $api.get('main/complaints/')
            .then(response => dispatch(initComplaintsAction(response.data)))
            .catch(err => console.log(err))
    }
}