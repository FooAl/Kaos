import * as APIUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const fetchMessages = channelID => dispatch => {
    return(
        APIUtil.fetchMessages(channelID).then(messages => dispatch(receiveMessages(messages)))
    );
};

const receiveMessages = messages => {
    return({
        type: RECEIVE_MESSAGES,
        messages
    });
}