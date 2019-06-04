import * as APIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const fetchMessages = channelID => dispatch => {
    return(
        APIUtil.fetchMessages(channelID).then(payload => dispatch(receiveMessages(payload)))
    );
};

const receiveMessages = payload => {
    return({
        type: RECEIVE_MESSAGES,
        payload
    });
}