import React from 'react';
import {connect} from "react-redux";
import ChatRoom from "./chat_room";
import {fetchMessages} from "../../../actions/message_actions";

const mSP = state => {
    return ({
        users: state.entities.users,
        messages: state.entities.messages,
    });
};

const mDP = dispatch => {
    return ({
        fetchMessages: channelID => dispatch(fetchMessages(channelID)),
    });
};

export default connect(mSP, mDP)(ChatRoom);