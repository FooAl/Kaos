import {RECEIVE_USER} from "../actions/session_actions";
import {RECEIVE_MESSAGES} from "../actions/message_actions";
import {merge} from "lodash";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type){
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user});
        case RECEIVE_MESSAGES:
            return merge({}, state, action.payload.users);
        default:
        return state;
    }
};

export default usersReducer;