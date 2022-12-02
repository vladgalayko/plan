import { combineReducers } from "redux";
import authReducer from './authReducer';
import projectReducer from './projectReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})