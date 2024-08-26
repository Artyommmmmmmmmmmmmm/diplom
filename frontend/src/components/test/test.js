import { fetchMachines } from "../../reducers/machineReducer/fetchMachines";
import { useDispatch, useSelector } from "react-redux";
import './test.css'
import { useEffect } from "react";


export const Test = function() {
    const state = useSelector(state => state.machine)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMachines())
    }, [])
    return(
        <>
            {state.map((el, id) => 
                <p key={id}>{el.client.username}</p>
            )}
        </>
    )
}