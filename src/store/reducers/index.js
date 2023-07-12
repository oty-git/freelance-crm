import { combineReducers } from 'redux';
import authReducer from './authReducer';
import initReducer from './initReducer';
import apiResponsesReducer from './apiResponsesReducer';
export default combineReducers({
    auth: authReducer,
    init: initReducer,
    responses: apiResponsesReducer,
});
