import {RECEIVE_USER, RECEIVE_ERRORS, EMPTY_ERRORS} from "../actions/session_actions";
import {merge} from "lodash";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case EMPTY_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;