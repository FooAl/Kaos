import { RECEIVE_JOIN, RECEIVE_JOINS, DESTROY_JOIN} from "../actions/join_actions";
import {merge} from "lodash";

const JoinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOIN:
            return merge({}, state, {[action.link.id]: action.link});
        case RECEIVE_JOINS:
            return merge({}, state, action.links);
        case DESTROY_JOIN:
            let oldState = merge({}, state);
            delete oldState[action.linkID];
            return oldState;
        default:
            return state;
    }
};

export default JoinsReducer;