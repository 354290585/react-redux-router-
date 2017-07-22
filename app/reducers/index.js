import { combineReducers } from 'redux';
import userInfoReducer from './userinfo';
import categoryInfoReducer from './category'
import loginReducer from './stor'
export default combineReducers({
    userInfoReducer,
    categoryInfoReducer,
    loginReducer
}) 