import { fetchUnauthorized } from "../../reducers/unauthorizedReducer/fetchUnauthorized";
import { useDispatch, useSelector } from "react-redux";
import './Unauthorized.css'
import { useEffect, useState } from "react";


export const Unauthorized = function() {
    const reduxState = useSelector(state => state.unauthorized)
    const [number, setNumber] = useState(null)
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUnauthorized())
    }, [])

    useEffect(() => {
        setState([...reduxState].filter((elem) => elem.machine_factory_num == number))
        console.log(number)
        if (number === '0') {
            setState(reduxState)
        }
    }, [number])
    return(
        <>
        {reduxState ?
        <div className="main-unauthorized-cont">
            <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
            {state.length > 0 ? 
                state.map((el, id) => 
                <div key={id}>
                    <h1>машина {el.id}</h1>
                    <div className="unauthorized-row">
                        <div className="unauthorized-table-block">
                            <span>зав № машины</span>
                            <span>{el.machine_factory_num}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>модель машины</span>
                            <span>{el.machine_model.name}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>зав № двигателя</span>
                            <span>{el.engine_factory_num}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>модель двигателя</span>
                            <span>{el.engine_model.name}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>зав № трансмисси</span>
                            <span>{el.transmission_factory_num}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>модель трансмиссии</span>
                            <span>{el.transmission_model.name}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>зав № вед.моста</span>
                            <span>{el.lead_factory_num}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>модель ведмоста</span>
                            <span>{el.lead_model.name}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>зав № упр.моста</span>
                            <span>{el.control_factory_num}</span>
                        </div>
                        <div className="unauthorized-table-block">
                            <span>модель упр.моста</span>
                            <span>{el.control_model.name}</span>
                        </div>
                    </div>
                </div>
                )
            :
            <h1>ничего не найдено</h1>
            }

        </div>
        :
        <div className="main-unauthorized-cont">
            <span className="unauthorized-header">загрузка</span>
        </div>
        }
        </>
    )
}