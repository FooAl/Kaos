import {connect} from "react-redux";
import ChannelIndex from "./channel_index";
import {fetchChannels, clearChannels} from "../../actions/channel_actions";
import {openModal} from "../../actions/modal_actions";
import { clearMessages } from "../../actions/message_actions";


const mSP = state => {
    return ({
        channels: state.entities.channels,
    });
};

const mDP = dispatch => {
    return ({
        fetchChannels: serverID => dispatch(fetchChannels(serverID)),
        clearChannels: () => dispatch(clearChannels()),
        clearMessages: () => dispatch(clearMessages()),
        openModal: field => dispatch(openModal(field)),
    });
};

export default connect(mSP, mDP)(ChannelIndex);