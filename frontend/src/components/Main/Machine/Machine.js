import { useDispatch, useSelector } from "react-redux";
import './Machine.css'
import { useEffect, useState } from "react";
import { 
    fetchMachineIdRetrieve,
    fetchControlIdRetrieve,
    fetchLeadIdRetrieve,
    fetchEngineIdRetrieve,
    fetchMachineModelIdRetrieve,
    fetchServiceCompanyIdRetrieve,
    fetchTransmissionIdRetrieve,
} from "../../../reducers/idRetrieveReducer/fetchIdRetrieve";
import { useNavigate } from 'react-router-dom'

export const Machine = function() {
    const [sortPattern, setSortPattern] = useState('shipment')
    const reduxState = useSelector(state => state.machine)
    const [state, setState] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sortState = () => {
        switch (sortPattern) {
            case 'shipment':
                setState([...reduxState].sort((a, b) => new Date(a.date_of_shipment) - new Date(b.date_of_shipment))) 
                break;
            case 'model':
                setState([...reduxState].sort((a, b) => a.machine_model.name.localeCompare(b.machine_model.name)))
                break;
            case 'engine':
                setState([...reduxState].sort((a, b) => a.engine_model.name.localeCompare(b.engine_model.name)))
                break;
            case 'transmission':
                setState([...reduxState].sort((a, b) => a.transmission_model.name.localeCompare(b.transmission_model.name)))
                break;
            case 'lead':
                setState([...reduxState].sort((a, b) => a.lead_model.name.localeCompare(b.lead_model.name)))
                break;
            case 'control':
                setState([...reduxState].sort((a, b) => a.control_model.name.localeCompare(b.control_model.name)))
                break;
        }
    }
    
    const handleClick = (id) => {
        dispatch(fetchMachineIdRetrieve(id))
        navigate('/main/machine')
    }

    const toMachineModel = (id) => {
        dispatch(fetchMachineModelIdRetrieve(id))
        navigate('/main/machinemodel')
    }

    const toControl = (id) => {
        dispatch(fetchControlIdRetrieve(id))
        navigate('/main/control')
    }

    const toLead = (id) => {
        dispatch(fetchLeadIdRetrieve(id))
        navigate('/main/lead')
    }

    const toEngine = (id) => {
        dispatch(fetchEngineIdRetrieve(id))
        navigate('/main/engine')
    }

    const toServiceCompany = (id) => {
        dispatch(fetchServiceCompanyIdRetrieve(id))
        navigate('/main/servicecompany')
    }

    const toTransmission = (id) => {
        dispatch(fetchTransmissionIdRetrieve(id))
        navigate('/main/transmission')
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
                <option value='shipment'>по дате</option>
                <option value='model'>по модели</option>
                <option value='engine'>по двигателю</option>
                <option value='transmission'>по трансмиссии</option>
                <option value='lead'>по вед.мосту</option>
                <option value='control'>по упр.мосту</option>
            </select>
            {state.map((el, id) => 
            
                <div key={id}>
                    <span className="machine-header">{'машина ' + (id + 1)}</span>
                    <div className="machine-row">
                        <div className="machine-table-block">
                            <span>зав № машины</span>
                            <span>{el.machine_factory_num}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toMachineModel(el.machine_model.id)}}>
                            <span>модель машины</span>
                            <span>{el.machine_model.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>зав № двигателя</span>
                            <span>{el.engine_factory_num}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toEngine(el.engine_model.id)}}>
                            <span>модель двигателя</span>
                            <span>{el.engine_model.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>зав № трансмисси</span>
                            <span>{el.transmission_factory_num}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toTransmission(el.transmission_model.id)}}>
                            <span>модель трансмиссии</span>
                            <span>{el.transmission_model.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>зав № вед.моста</span>
                            <span>{el.lead_factory_num}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toLead(el.lead_model.id)}}>
                            <span>модель ведмоста</span>
                            <span>{el.lead_model.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>зав № упр.моста</span>
                            <span>{el.control_factory_num}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toControl(el.control_model.id)}}>
                            <span>модель упр.моста</span>
                            <span>{el.control_model.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>№ договора поставки</span>
                            <span>{el.delivery_agreement_num}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>дата отгрузки с завода</span>
                            <span>{el.date_of_shipment}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>грузополучатель</span>
                            <span>{el.consignee}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>адрес поставки</span>
                            <span>{el.delivery_address}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>комплектация</span>
                            <span>{el.equipment}</span>
                        </div>
                        <div className="machine-table-block">
                            <span>клиент</span>
                            <span>{el.client.username}</span>
                        </div>
                        <div className="machine-table-block clickable" onClick={() => {toServiceCompany(el.service_company.id)}}>
                            <span>сервисная компания</span>
                            <span>{el.service_company.name}</span>
                        </div>
                        <div className="machine-table-block">
                            <button onClick={() => handleClick(el.id - 1)}>Подробнее</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}