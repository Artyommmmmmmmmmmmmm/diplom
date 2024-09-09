import { useDispatch, useSelector } from "react-redux";
import './ComplaintDetail.css'
import { useEffect, useState } from "react";
import { patchComplaint } from "../../reducers/patchRequest/patchComplaint";
import { fetchComplaintIdRetrieve } from "../../reducers/idRetrieveReducer/fetchIdRetrieve";
import { getUser } from "../../reducers/currentUserReducer/login";

export const ComplaintDetail = function() {
    const reduxState = useSelector(state => state.id.complaint)
    const reduxUser = useSelector(state => state.user) 
    const [sparePartsUsed, setSparePartsUsed] = useState(0)
    const [recoveryDate, setRecoveryDate] = useState(0)
    const [equipmentDowntime, setEquipmentDowntime] = useState(0)
    const [currentUser, setCurrentUser] = useState(null)
    const dispatch = useDispatch()

    const handleClick = async () => {
        patchComplaint(reduxState.id, sparePartsUsed, recoveryDate, equipmentDowntime)
        dispatch(fetchComplaintIdRetrieve(reduxState.id))
    }

    useEffect(() => {
        if (reduxUser.username) {
            setCurrentUser(reduxUser.groups[0].name)
        }
    }, [reduxUser])

    useEffect(() => {
        if (reduxState) {
            setSparePartsUsed(reduxState.spare_parts_used)
            setRecoveryDate(reduxState.recovery_date)
            setEquipmentDowntime(reduxState.equipment_downtime)
        }
    }, [reduxState])
    return (
        <>
        {reduxState ?
        <div className="main-tm-detail-cont">
            <span className="complaint-detail-header">{'Рекламация ' + (reduxState.id + 1)}</span>
            <div className="complaint-detail-row">
                <div className="complaint-detail-table-block">
                    <span>Дата отказа</span>
                    <span>{reduxState.refusal_date}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>наработка м/час</span>
                    <span>{reduxState.operating_time}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Узел отказа</span>
                    <span>{reduxState.failure_node.name}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Описание отказа</span>
                    <span>{reduxState.failure_description}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Способ восстановления</span>
                    <span>{reduxState.recovery_method.name}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Используемые запасные части</span>
                    <input
                    type="text"
                    value={sparePartsUsed}
                    placeholder={reduxState.spare_parts_used}
                    onChange={(e) => setSparePartsUsed(e.target.value)}
                    />
                    <span>{reduxState.spare_parts_used}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Дата восстановления</span>
                    <input
                    type="text"
                    value={recoveryDate}
                    placeholder={reduxState.recovery_date}
                    onChange={(e) => setRecoveryDate(e.target.value)}
                    />
                    <span>{reduxState.recovery_date}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Время простоя техники</span>
                    <input
                    type="text"
                    value={equipmentDowntime}
                    placeholder={reduxState.equipment_downtime}
                    onChange={(e) => setEquipmentDowntime(e.target.value)}
                    />
                    <span>{reduxState.equipment_downtime}</span>
                </div>
                <div className="complaint-detail-table-block">
                    <span>Cервисная компания</span>
                    <span>{reduxState.service_company.name}</span>
                </div>
                {currentUser == 'service_company' ? 
                    <div className="complaint-detail-table-block">
                        <button onClick={() => handleClick()}>Сохранить</button>
                    </div>
                :
                    null
                }
            </div>
        </div>
        :
        <div className="main-complaint-detail-cont">
            <span className="complaint-detail-header">загрузка</span>
            <span className="complaint-detail-hint">
                {"(если вы перешли на эту страницу не посредством кнопки \"редактировать\" то тут ничего не появится)"}
            </span>
        </div>
        }
        </>
    )
}