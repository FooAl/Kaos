import {DESTROY_SERVER,
        RECEIVE_SERVER,
        RECEIVE_SERVERS} from "../actions/server_actions";
import { merge } from "lodash";

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVER:
            return merge({}, state, { [action.server.id]: action.server });
        case RECEIVE_SERVERS:
            return merge({}, state, action.servers);
        case DESTROY_SERVER:
            let oldState = merge({}, state);
            delete oldState[action.serverID];
            return oldState;
        default:
            return state;
    }
};

export default serversReducer;