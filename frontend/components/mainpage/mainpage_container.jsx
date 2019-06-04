import React from "react";
import { connect } from "react-redux";
import Mainpage from "./mainpage";
import { logIn } from "../../actions/session_actions";

const mSP = state => {
    return ({
        session: state.session.id
    });
};

const mDP = dispatch => {
    return (
        {
            logIn: user => dispatch(logIn(user)),
        }
    );
};

export default connect(mSP, mDP)(Mainpage);