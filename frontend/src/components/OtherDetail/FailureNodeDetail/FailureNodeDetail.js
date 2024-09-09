import { useSelector, useDispatch } from "react-redux";
import '../OtherDetail.css'

export const FailureNodeDetail = function() {
    const reduxState = useSelector(state => state.id.failureNode)

    return (
        <>
        {reduxState ?
        <div className="main-other-detail-cont">
            <h1>{reduxState.name}</h1>
            <div className="other-detail-row">
                <span>{reduxState.description}</span>
            </div>
        </div>
        :
        <div className="main-other-detail-cont">
            <span className="other-detail-header">загрузка</span>
        </div>
        }
        </>
    )
}
