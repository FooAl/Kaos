import React from "react";
import {connect} from "react-redux";
import SignupForm from "./signup_form";
import {signUp, logOut} from "../../actions/session_actions";
import {Link} from "react-router-dom";

const mSP = (state, ownProps) => {
    return(
        {
            formType: 'Create an Account',
            navLink: <Link to="/login">Already have an account?</Link>
        }
    );
};

const mDP = dispatch => {
    return(
        {
            signUp: user => dispatch(signUp(user)),
            logOut: () => dispatch(logOut()),
        }
    );
};

export default connect(mSP, mDP)(SignupForm);