import { useSelector, useDispatch } from "react-redux";
import './MachineDetail.css'

export const MachineDetail = function() {
    const reduxState = useSelector(state => state.id.machine)

    return (
        <>
        {reduxState ?
        <div className="main-machine-detail-cont">
            <h1>машина {reduxState.id}</h1>
            <div className="machine-detail-row">
                <div className="machine-detail-table-block">
                    <span>зав № машины</span>
                    <span>{reduxState.machine_factory_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>модель машины</span>
                    <span>{reduxState.machine_model.name}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>зав № двигателя</span>
                    <span>{reduxState.engine_factory_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>модель двигателя</span>
                    <span>{reduxState.engine_model.name}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>зав № трансмисси</span>
                    <span>{reduxState.transmission_factory_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>модель трансмиссии</span>
                    <span>{reduxState.transmission_model.name}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>зав № вед.моста</span>
                    <span>{reduxState.lead_factory_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>модель ведмоста</span>
                    <span>{reduxState.lead_model.name}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>зав № упр.моста</span>
                    <span>{reduxState.control_factory_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>модель упр.моста</span>
                    <span>{reduxState.control_model.name}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>№ договора поставки</span>
                    <span>{reduxState.delivery_agreement_num}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>дата отгрузки с завода</span>
                    <span>{reduxState.date_of_shipment}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>грузополучатель</span>
                    <span>{reduxState.consignee}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>адрес поставки</span>
                    <span>{reduxState.delivery_address}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>комплектация</span>
                    <span>{reduxState.equipment}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>клиент</span>
                    <span>{reduxState.client.username}</span>
                </div>
                <div className="machine-detail-table-block">
                    <span>сервисная компания</span>
                    <span>{reduxState.service_company.name}</span>
                </div>
            </div>
        </div>
        :
        <div className="main-machine-detail-cont">
            <span className="machine-detail-header">загрузка</span>
            <span className="machine-detail-hint">
                {"(если вы перешли на эту страницу не посредством кнопки \"редактировать\" то тут ничего не появится)"}
            </span>
        </div>
        }
        </>
    )
}
