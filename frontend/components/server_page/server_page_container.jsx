import React from "react";
import { connect } from "react-redux";
import ServerPage from "./server_page";
import { logOut } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mDP = dispatch => {
    return (
        {
            logOut: () => dispatch(logOut()),
        }
    );
};

export default connect(null, mDP)(ServerPage);