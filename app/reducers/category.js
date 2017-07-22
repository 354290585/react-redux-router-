import * as actionTypes from '../util/userInfoActionType';

const initialState = {};

export default function category(state = initialState, action){
    switch (action.type) {
        case actionTypes.CATEGORY:
            return action.data;
        default:
            return state;
    }
}