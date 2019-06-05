import {connect} from "react-redux";
import ChannelIndex from "./channel_index";
import {fetchChannels} from "../../actions/channel_actions";
import {openModal} from "../../actions/modal_actions";

const mSP = state => {
    return ({
        channels: state.entities.channels,
    });
};

const mDP = dispatch => {
    return ({
        fetchChannels: serverID => dispatch(fetchChannels(serverID)),
        openModal: field => dispatch(openModal(field)),
    });
};

export default connect(mSP, mDP)(ChannelIndex);