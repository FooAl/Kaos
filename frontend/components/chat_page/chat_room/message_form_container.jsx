import {connect} from "react-redux";
import MessageForm from "./message_form";
import { fetchServers, clearServers } from "../../../actions/server_actions";

const mSP = state => {
    return({
        current_user: state.session.id
    });
};

const mDP = dispatch => {
    return ({
        fetchServers: (sessionID, isPublic) => dispatch(fetchServers(sessionID, isPublic)), 
        clearServers: () => dispatch(clearServers()),

    })
}

export default connect(mSP, mDP)(MessageForm);