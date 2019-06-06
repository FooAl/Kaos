import {RECEIVE_USER, LOGOUT_USER, } from "../actions/session_actions";
import {merge} from "lodash";

const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return merge({}, state, {id: action.user.id});
        case LOGOUT_USER:
            return {id: null};
        default:
            return state;
    }
};

export default sessionReducer;