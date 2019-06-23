import { connect } from "react-redux";
import LoginForm from "./login_form";
import { logIn, logOut, emptyErrors} from "../../actions/session_actions";


const mSP = (state) => {
    return (
        {
            errors: state.errors,
        }
    );
};

const mDP = dispatch => {
    return (
        {
            logIn: user => dispatch(logIn(user)),
            logOut: () => dispatch(logOut()),
            emptyErrors: () => dispatch(emptyErrors()),
        }
    );
};

export default connect(mSP, mDP)(LoginForm);