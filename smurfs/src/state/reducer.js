import {combineReducers} from 'redux';
import { LOAD_SMURFS, LOADING, ERROR } from './actions';

const initSmurfState = [];

const smurfReducer = (state = initSmurfState, action) => {
    switch(action.type){
        case LOAD_SMURFS:
            return action.payload
        default:
            return state;
    }
}

const initLoadingState = false;

const loadingReducer = (state = initLoadingState, action) => {
    switch(action.type) {
        case LOADING:
            return !state
        default: 
        return state;
    }
}

const initErrorState = '';

const errorReducer = (state = initErrorState, action) => {
    switch(action.type) {
        case ERROR:
            return action.payload
        default: 
        return state;
    }
}

export default combineReducers({
    smurfReducer,
    loadingReducer,
    errorReducer,
})