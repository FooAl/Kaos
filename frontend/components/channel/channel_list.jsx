import React from "react";
import ChannelIndex from "./channel_index_container";
import {logOut} from "../../actions/session_actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class ChannelList extends React.Component{
    render(){
        const server = this.props.servers[this.props.match.params.id];
        let serverName = "";
        if(server !== undefined){
            serverName = server.server_name;
        }
        return(
            <div className="channelColumn">
                <section className="channelList">
                    <section className="channelHeader">{serverName}</section>
                    <ChannelIndex />
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
        servers: state.entities.servers,
        channels: state.entities.channels,
        users: state.entities.users,
        current_user_id: state.session.id,
    });
};

const mDP = dispatch => {
    return({
        logOut: () => dispatch(logOut()),
    })
}

export default connect(mSP, mDP)(ChannelList);