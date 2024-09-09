import { fetchComplaints } from '../../reducers/complaintReducer/fetchComplaint';
import { fetchMachines } from "../../reducers/machineReducer/fetchMachines";
import { fetchTMs } from '../../reducers/tmReducer/fetchTM';
import { useDispatch, useSelector } from "react-redux";
import './Main.css'
import { useEffect, useState } from "react";
import { Machine } from "./Machine/Machine";
import { TM } from "./TM/TM";
import { Complaint } from "./Complaint/Complaint";
import { getUser } from "../../reducers/currentUserReducer/login";

export const Main = function() {
    const reduxState = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [machines, setMachines] = useState(true)
    const [tm, setTm] = useState(false)
    const [complaints, setComplaints] = useState(false)

    const switchFunc = (btn) => {
        switch (btn) {
            case 'info':
                setMachines(true)
                setTm(false)
                setComplaints(false)
                break;
            case 'tm':
                setMachines(false)
                setTm(true)
                setComplaints(false)
                break;
            case 'complaint':
                setMachines(false)
                setTm(false)
                setComplaints(true)
                break;
        }
    }
    useEffect(() => {
        dispatch(fetchTMs())
        dispatch(fetchMachines())
        dispatch(fetchComplaints())
        dispatch(getUser())
    }, [])
    return(
        <div className="main-content-cont">
            <span>{reduxState.username}</span>
            <span>Информация о комплектации и технических характеристиках вашей техники</span>
            
            <div className="switches-cont">
                <div 
                    className={machines ? "switch-button switch-button-active" : "switch-button"}
                    onClick={() => switchFunc('info')}
                >Общая инфо</div>
                <div 
                    className={tm ? "switch-button switch-button-active" : "switch-button"}
                    onClick={() => switchFunc('tm')}
                >ТО</div>
                <div 
                    className={complaints ? "switch-button switch-button-active" : "switch-button"}
                    onClick={() => switchFunc('complaint')}
                >Рекламации</div>
            </div>
            <div>
                {machines ? <Machine/> : null}
                {tm ? <TM/> : null}
                {complaints ? <Complaint/> : null}
            </div>
        </div>
    )
}