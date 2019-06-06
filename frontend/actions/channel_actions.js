import * as APIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const DESTROY_CHANNEL = "DESTROY_CHANNEL";
export const CLEAR_CHANNELS = "CLEAR_CHANNELS";

export const fetchChannels = serverID => dispatch => {
    return(
        APIUtil.fetchChannels(serverID).then(channels => dispatch(receiveChannels(channels)))
    );
};

export const fetchChannel = (serverID, channelID) => dispatch => {
    return(
        APIUtil.fetchChannel(serverID, channelID).then(channel => dispatch(receiveChannel(channel)))
    );
};

export const createChannel = channel => dispatch => {
    return(
        APIUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)))
    );
};

export const deleteChannel = channelID => dispatch => {
    return(
        APIUtil.deleteChannel(channelID).then (() => dispatch(destroyChannel()))
    );
};

export const editChannel = channel => dispatch => {
    return (
        APIUtil.editChannel(channel).then(channel => dispatch(receiveChannel(channel)))
    );
}

const receiveChannels = channels => {
    return({
        type: RECEIVE_CHANNELS,
        channels
    });
};

const receiveChannel = channel => {
    return({
        type: RECEIVE_CHANNEL,
        channel
    });
};;

const destroyChannel = channelID => {
    return({
        type: DESTROY_CHANNEL,
        channelID
    });
};

export const clearChannels = () => {
    return({
        type: CLEAR_CHANNELS
    });
};