import { connect } from "react-redux";
import ServerPage from "./server_page";
import { logOut } from "../../actions/session_actions";

const mDP = dispatch => {
    return (
        {
            logOut: () => dispatch(logOut()),
        }
    );
};

export default connect(null, mDP)(ServerPage);