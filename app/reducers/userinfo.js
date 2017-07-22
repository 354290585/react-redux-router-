import * as actionTypes from '../util/userInfoActionType';

const initialState = {};

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}