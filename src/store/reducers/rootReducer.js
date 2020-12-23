import authReducer from './authReducer'
import postReducer from './postReducer'
import commentReducer from './commentReducer'
import branchReducer from './branchReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    comment: commentReducer,
    branch: branchReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer