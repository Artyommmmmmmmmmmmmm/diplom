import { fetchComplaints } from '../../reducers/complaintReducer/fetchComplaint';
import { useDispatch, useSelector } from "react-redux";
import './Complaint.css'
import { useEffect } from "react";


export const Complaint = function() {
    const state = useSelector(state => state.complaint)
    const dispatch = useDispatch()
    console.log(1)
    console.log(state)
    useEffect(() => {
        dispatch(fetchComplaints())
    }, [])
    return(
        <>
            {state.map((el, id) => 
                <p key={id}>{el.failure_description}</p>
            )}
        </>
    )
}