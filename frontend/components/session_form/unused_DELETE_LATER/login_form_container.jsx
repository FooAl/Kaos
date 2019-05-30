import React from "react";
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { logIn, logOut} from "../../actions/session_actions";
import { Link } from "react-router-dom";

const mSP = (state, ownProps) => {
    return (
        {

            formType: 'Welcome back!',
            navLink: <Link to="/register">Register</Link>
        }
    );
};

const mDP = dispatch => {
    return (
        {
            logIn: user => dispatch(logIn(user)),
            logOut: () => dispatch(logOut()),
        }
    );
};

export default connect(mSP, mDP)(LoginForm);