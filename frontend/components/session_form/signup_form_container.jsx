import {connect} from "react-redux";
import SignupForm from "./signup_form";
import {signUp, logOut, emptyErrors} from "../../actions/session_actions";

const mSP = (state, ownProps) => {
    return(
        {
            errors: state.errors,
        }
    );
};

const mDP = dispatch => {
    return(
        {
            signUp: user => dispatch(signUp(user)),
            logOut: () => dispatch(logOut()),
            emptyErrors: () => dispatch(emptyErrors()),
        }
    );
};

export default connect(mSP, mDP)(SignupForm);