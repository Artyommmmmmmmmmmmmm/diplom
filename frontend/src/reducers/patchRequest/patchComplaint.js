import $api from "../../http";

export const patchComplaint = (id, sparePartsUsed, recoveryDate, equipmentDowntime) => {
        return $api.patch('main/complaints/' + id + '/', {
            "spare_parts_used": sparePartsUsed,
            "recovery_date": recoveryDate,
            "equipment_downtime": equipmentDowntime
        })
            .catch(err => console.log(err))
}
