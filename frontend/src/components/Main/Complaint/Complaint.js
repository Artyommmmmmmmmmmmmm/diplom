import { useDispatch, useSelector } from "react-redux";
import './Complaint.css'
import { useEffect, useState } from "react";
import { 
    fetchComplaintIdRetrieve,
    fetchServiceCompanyIdRetrieve,
    fetchRecoveryMethodIdRetrieve,
    fetchFailureNodeIdRetrieve
} from "../../../reducers/idRetrieveReducer/fetchIdRetrieve";
import { useNavigate } from "react-router-dom";


export const Complaint = function() {
    const [sortPattern, setSortPattern] = useState('refusal_date')
    const reduxState = useSelector(state => state.complaint)
    const currentUser = useSelector(state => state.user.groups[0].name)
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sortState = () => {
        switch (sortPattern) {
            case 'refusal_date':
                setState([...reduxState].sort((a, b) => new Date(a.refusal_date) - new Date(b.refusal_date))) 
                break;
            case 'failure_node':
                setState([...reduxState].sort((a, b) => a.failure_node.name.localeCompare(b.failure_node.name)))
                break;
            case 'recovery_method':
                setState([...reduxState].sort((a, b) => a.recovery_method.name.localeCompare(b.recovery_method.name)))
                break;
            case 'service_company':
                setState([...reduxState].sort((a, b) => a.service_company.name.localeCompare(b.service_company.name)))
                break;
        }
    }
    
    const handleClick = (id) => {
        dispatch(fetchComplaintIdRetrieve(id))
        navigate('/main/complaint')
    }

    const toServiceCompany = (id) => {
        dispatch(fetchServiceCompanyIdRetrieve(id))
        navigate('/main/servicecompany')
    }

    const toRecoveryMethod = (id) => {
        dispatch(fetchRecoveryMethodIdRetrieve(id))
        navigate('/main/recoverymethod')
    }

    const toFailureNode = (id) => {
        dispatch(fetchFailureNodeIdRetrieve(id))
        navigate('/main/failurenode')
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
                <option value='refusal_date'>по дате</option>
                <option value='failure_node'>по узлу отказа</option>
                <option value='recovery_method'>по методу восстановления</option>
                <option value='service_company'>по сервисной компании</option>
            </select>
            {state.map((el, id) => 
                <div key={id}>
                    <span className="complaint-header">{'Рекламация ' + (id + 1)}</span>
                    <div className="complaint-row">
                        <div className="complaint-table-block">
                            <span>Дата отказа</span>
                            <span>{el.refusal_date}</span>
                        </div>
                        <div className="complaint-table-block">
                            <span>наработка м/час</span>
                            <span>{el.operating_time}</span>
                        </div>
                        <div className="complaint-table-block clickable" 
                             onClick={() => toFailureNode(el.failure_node.id)}>
                            <span>Узел отказа</span>
                            <span>{el.failure_node.name}</span>
                        </div>
                        <div className="complaint-table-block">
                            <span>Описание отказа</span>
                            <span>{el.failure_description}</span>
                        </div>
                        <div className="complaint-table-block clickable" 
                             onClick={() => toRecoveryMethod(el.recovery_method.id)}>
                            <span>Способ восстановления</span>
                            <span>{el.recovery_method.name}</span>
                        </div>
                        <div className="complaint-table-block">
                            <span>Используемые запасные части</span>
                            <span>{el.spare_parts_used}</span>
                        </div>
                        <div className="complaint-table-block">
                            <span>Дата восстановления</span>
                            <span>{el.recovery_date}</span>
                        </div>
                        <div className="complaint-table-block">
                            <span>Время простоя техники</span>
                            <span>{el.equipment_downtime}</span>
                        </div>
                        <div className="complaint-table-block clickable" onClick={() => {toServiceCompany(el.service_company.id)}}>
                            <span>Cервисная компания</span>
                            <span>{el.service_company.name}</span>
                        </div>
                        
                            <div className="complaint-table-block">
                                <button onClick={() => handleClick(el.id)}>{currentUser == 'service_company' ?
                                                                            'Редактировать'
                                                                            :
                                                                            'Подробнее'
                                                                            }
                                </button>
                            </div>

                    </div>
                </div>
)}
        </>
    )
}