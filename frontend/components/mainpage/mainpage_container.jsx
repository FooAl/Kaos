import React from "react";
import { connect } from "react-redux";
import Mainpage from "./mainpage";
import { logIn } from "../../actions/session_actions";

const mDP = dispatch => {
    return (
        {
            logIn: user => dispatch(logIn(user)),
        }
    );
};

export default connect(null, mDP)(Mainpage);