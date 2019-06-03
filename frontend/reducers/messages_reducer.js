import {RECEIVE_MESSAGES} from "../actions/message_actions";
import {merge} from "lodash";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_MESSAGES:
            return merge({}, state, {[message.id]: message});
        default:
            return state;
    }
};


export default messagesReducer;