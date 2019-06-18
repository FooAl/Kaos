import React from 'react';
import {connect} from "react-redux";
import ChatRoom from "./chat_room";
import {fetchMessages, clearMessages} from "../../../actions/message_actions";

const mSP = state => {
    return ({
        users: state.entities.users,
        messages: state.entities.messages,
        channels: state.entities.channels,
    });
};

const mDP = dispatch => {
    return ({
        fetchMessages: channelID => dispatch(fetchMessages(channelID)),
        clearMessages: () => dispatch(clearMessages()),
        // receiveServerUsers: serverID => dispatch(receiveServerUsers(serverID)),
    });
};

export default connect(mSP, mDP)(ChatRoom);