import {connect} from "react-redux";
import ChannelIndex from "./channel_index";
import {fetchChannels} from "../../actions/channel_actions";

const mSP = state => {
    return ({
        channels: state.entities.channels,
    })
}

const mDP = dispatch => {
    return ({
        fetchChannels: serverID => dispatch(fetchChannels(serverID)),
    })
}

export default connect(mSP, mDP)(ChannelIndex);