import React from "react";
import { connect } from "react-redux";
import ServerList from "./server_list";
import { logOut } from "../../actions/session_actions";
import {fetchServers} from "../../actions/server_actions";
import { Link } from "react-router-dom";

const mSP = state => {
    return(
        {
            currentSessionid: state.session.id,
            servers: state.entities.servers
        }
    )
}

const mDP = dispatch => {
    return (
        {
            logOut: () => dispatch(logOut()),
            fetchServers: sessionID => dispatch(fetchServers(sessionID)),
        }
    );
};

export default connect(mSP, mDP)(ServerList);