import { useSelector, useDispatch } from "react-redux";
import './TMDetail.css'
import { useEffect, useState } from "react";
import { patchTM } from "../../reducers/patchRequest/patchTM";
import { fetchTMIdRetrieve } from "../../reducers/idRetrieveReducer/fetchIdRetrieve";

export const TMDetail = function() {
    const reduxState = useSelector(state => state.id.tm)
    const dispatch = useDispatch()
    const [operatingTime, setOperatingTime] = useState(0)
    const [orderId, setOrderId] = useState(0)
    const [orderDate, setOrderDate] = useState(0)

    const handleClick = async () => {
        await patchTM(reduxState.id, operatingTime, orderId, orderDate)
        dispatch(fetchTMIdRetrieve(reduxState.id))
    }

    useEffect(() => {
        if (reduxState) {
            setOperatingTime(reduxState.operating_time)
            setOrderId(reduxState.order_id)
            setOrderDate(reduxState.order_date)
        }
    }, [reduxState])

    return (
        <>
        {reduxState ?
        <div className="main-tm-detail-cont">
            <span className="tm-detail-header">{'ТО ' + (reduxState.id + 1)}</span>
            <div className="tm-detail-row">
                <div className="tm-detail-table-block">
                    <span>Вид ТО</span>
                    <span>{reduxState.tm_type.name}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>Дата проведения ТО</span>
                    <span>{reduxState.event_date}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>Наработка, м/час</span>
                    <input
                    type="text"
                    value={operatingTime}
                    placeholder={reduxState.operating_time}
                    onChange={(e) => setOperatingTime(e.target.value)}
                    />
                    <span>{reduxState.operating_time}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>№ заказ-наряда</span>
                    <input
                    type="text"
                    value={orderId}
                    placeholder={reduxState.order_id}
                    onChange={(e) => setOrderId(e.target.value)}
                    />
                    <span>{reduxState.order_id}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>Дата заказ-наряда</span>
                    <input
                    type="text"
                    value={orderDate}
                    placeholder={reduxState.order_date}
                    onChange={(e) => setOrderDate(e.target.value)}
                    />
                    <span>{reduxState.order_date}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>Организация, проводившая ТО</span>
                    <span>{reduxState.company_tm_producer.name}</span>
                </div>
                <div className="tm-detail-table-block">
                    <span>Сервисная компания</span>
                    <span>{reduxState.service_company.name}</span>
                </div>
                <div className="tm-detail-table-block">
                    <button onClick={() => handleClick()}>сохранить</button>
                </div>
            </div>
        </div>
        :
        <div className="main-tm-detail-cont">
            <span className="tm-detail-header">загрузка</span>
            <span className="tm-detail-hint">
                {"(если вы перешли на эту страницу не посредством кнопки \"редактировать\" то тут ничего не появится)"}
            </span>
        </div>
        }
        </>
    )
}