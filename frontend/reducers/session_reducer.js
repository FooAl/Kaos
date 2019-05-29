import {RECEIVE_USER, LOGOUT_USER, } from "../actions/session_actions";

const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return {id: action.user.id};
        case LOGOUT_USER:
            return {id: null};
        default:
            return state;
    }
};

export default sessionReducer;