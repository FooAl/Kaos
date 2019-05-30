import React from "react";
import {connect} from "react-redux";
import SessionForm from "./session_form";
import {signUp, logIn, logOut} from "../../actions/session_actions";
import {Link} from "react-router-dom";

// const mSP = (state, ownProps) => {
//     return(
//         {
//             formType: 'Create an Account',
            
//         }
//     );
// };

const mDP = dispatch => {
    return(
        {
            signUp: user => dispatch(signUp(user)),
            logIn: user => dispatch(logIn(user)),
            logOut: () => dispatch(logOut()),
        }
    );
};

export default connect(null, mDP)(SessionForm);