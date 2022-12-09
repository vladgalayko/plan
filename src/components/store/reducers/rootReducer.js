import { combineReducers } from "redux";
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})