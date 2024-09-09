import { useDispatch, useSelector } from "react-redux";
import './TM.css'
import { useEffect, useState } from "react";
import { 
    fetchTMIdRetrieve,
    fetchServiceCompanyIdRetrieve,
    fetchTMTypeIdRetrieve
 } from "../../../reducers/idRetrieveReducer/fetchIdRetrieve";
import { useNavigate } from "react-router-dom";

export const TM = function() {
    const [sortPattern, setSortPattern] = useState('event')
    const reduxState = useSelector(state => state.tm)
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sortState = () => {
        switch (sortPattern) {
            case 'event':
                setState([...reduxState].sort((a, b) => new Date(a.event_date) - new Date(b.event_date))) 
                break;
            case 'tm':
                setState([...reduxState].sort((a, b) => a.tm_type.name.localeCompare(b.tm_type.name)))
                break;
            case 'machine':
                setState([...reduxState].sort((a, b) => a.machine.machine_factory_num.localeCompare(b.machine.machine_factory_num)))
                break;
            case 'service_company':
                setState([...reduxState].sort((a, b) => a.service_company.name.localeCompare(b.service_company.name)))
                break;
        }
    }
    
    const handleClick = (id) => {
        dispatch(fetchTMIdRetrieve(id))
        navigate('/main/tm')
    }

    const toServiceCompany = (id) => {
        dispatch(fetchServiceCompanyIdRetrieve(id))
        navigate('/main/servicecompany')
    }

    const toTMType = (id) => {
        dispatch(fetchTMTypeIdRetrieve(id))
        navigate('/main/tmtype')
    }

    useEffect(() => {
        if (reduxState.length < 2) {
            setState(reduxState)
        } 
        if (reduxState.length > 1) {
            sortState()
        }
    }, [reduxState, sortPattern])

    return(
        <>
            <select
                value={sortPattern}
                onChange={(e) => setSortPattern(e.target.value)}
            >
                <option value='event'>по дате</option>
                <option value='tm'>по виду ТО</option>
                <option value='machine'>по зав.номеру техники</option>
                <option value='service_company'>по сервисной компании</option>
            </select>
            {state.map((el, id) => 
                <div key={id}>
                    <span className="tm-header">{'ТО ' + (id + 1)}</span>
                    <div className="tm-row">
                        <div className="tm-table-block clickable" onClick={() => toTMType(el.tm_type.id)}>
                            <span>Вид ТО</span>
                            <span>{el.tm_type.name}</span>
                        </div>
                        <div className="tm-table-block">
                            <span>Дата проведения ТО</span>
                            <span>{el.event_date}</span>
                        </div>
                        <div className="tm-table-block">
                            <span>Наработка, м/час</span>
                            <span>{el.operating_time}</span>
                        </div>
                        <div className="tm-table-block">
                            <span>№ заказ-наряда</span>
                            <span>{el.order_id}</span>
                        </div>
                        <div className="tm-table-block">
                            <span>Дата заказ-наряда</span>
                            <span>{el.order_date}</span>
                        </div>
                        <div className="tm-table-block clickable" onClick={() => {toServiceCompany(el.company_tm_producer.id)}}>
                            <span>Организация, проводившая ТО</span>
                            <span>{el.company_tm_producer.name}</span>
                        </div>
                        <div className="tm-table-block clickable" onClick={() => {toServiceCompany(el.service_company.id)}}>
                            <span>Сервисная компания</span>
                            <span>{el.service_company.name}</span>
                        </div>
                        <div className="tm-table-block">
                            <button onClick={() => handleClick(el.id)}>Редактировать</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}