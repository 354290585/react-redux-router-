import * as actionTypes from '../util/userInfoActionType';

export function updata(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
export function category(data) {
    return {
        type:actionTypes.CATEGORY,
        data
    }
}