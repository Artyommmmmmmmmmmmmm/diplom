import { fetchTMs } from '../../reducers/tmReducer/fetchTM';
import { useDispatch, useSelector } from "react-redux";
import './TM.css'
import { useEffect } from "react";


export const TM = function() {
    const state = useSelector(state => state.tm)
    const dispatch = useDispatch()
    console.log(2)
    console.log(state)
    useEffect(() => {
        dispatch(fetchTMs())
    }, [])
    return(
        <>
            {state.map((el, id) => 
                <p key={id}>{el.company_tm_producer.name}</p>
            )}
        </>
    )
}