import {connect} from "react-redux";
import ChatRoom from "./chat_room";
import {fetchMessages, clearMessages} from "../../../actions/message_actions";
import {fetchUser} from "../../../actions/user_actions";

const mSP = state => {
    return ({
        users: state.entities.users,
        messages: state.entities.messages,
        channels: state.entities.channels,
        session: state.session.id,
    });
};

const mDP = dispatch => {
    return ({
        fetchMessages: channelID => dispatch(fetchMessages(channelID)),
        clearMessages: () => dispatch(clearMessages()),
        fetchUser: user => dispatch(fetchUser(user)),
        fetchServerUsers: serverID => dispatch(receiveServerUsers(serverID)),
    });
};

export default connect(mSP, mDP)(ChatRoom);