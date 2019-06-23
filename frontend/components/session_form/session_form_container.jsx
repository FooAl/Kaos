import {connect} from "react-redux";
import SessionForm from "./session_form";
import {signUp, logIn, logOut} from "../../actions/session_actions";


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