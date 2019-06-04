import {DESTROY_CHANNEL, 
    RECEIVE_CHANNEL, 
    RECEIVE_CHANNELS} from "../actions/channel_actions";
import {merge} from "lodash";

const channelsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL:
            return merge({}, state, {[action.channel.id]: action.channel});
        case RECEIVE_CHANNELS:
            return merge({}, state, action.channels);
        case DESTROY_CHANNEL:
            let oldState = merge({}, state);
            delete oldState[action.channelID];
            return oldState;        
        default:
            return state;
    }
};

export default channelsReducer;