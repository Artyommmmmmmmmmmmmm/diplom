import $api from "../../http";

export const patchTM = (id, operatingTime, orderId, orderDate) => {
        return $api.patch('main/tms/' + id + '/', {
            "operating_time": operatingTime,
            "order_id": orderId,
            "order_date": orderDate
        })
            .catch(err => console.log(err))
}
