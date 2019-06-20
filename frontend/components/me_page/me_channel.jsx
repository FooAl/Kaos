import React from "react";
import { withRouter, Link } from "react-router-dom";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logOut } from "../../actions/session_actions";

class MeIndex extends React.Component {

    componentDidMount(){
        this.props.fetchDMs(this.props.userID);
    }

    render() {
        return(
            <div className="channelColumn">
                <section className="channelList">
                    <section className="channelHeader">
                        <span>{this.props.users[this.props.current_user_id].discord_username}</span>
                    </section>
                </section>

                <section className="subChannelFooter">
                    <section className="footerUser">
                        <img className="userIcon" src={window.iconGreen} />
                        <span>{this.props.users[this.props.current_user_id].discord_username}</span>
                    </section>
                    <Link to="/" onClick={() => this.props.logOut()}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
                </section>
            </div>
        )
    }
}

const mSP = state => {
    return ({
        users: state.entities.users,
        current_user_id: state.session.id,
    });
};

const mDP = dispatch => {
    return ({
        logOut: () => dispatch(logOut()),
    })
}

export default withRouter(connect(mSP, mDP)(MeIndex));