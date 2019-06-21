import React from "react";
import { withRouter, Link } from "react-router-dom";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {fetchServers} from "../../actions/server_actions";
import { logOut } from "../../actions/session_actions";

class MeIndex extends React.Component {

    componentDidMount(){
        this.props.fetchServers(this.props.current_user_id, false);
    }

    render() {
        
        let servers = Object.values(this.props.servers);
        
        servers = servers.filter(function(server){
            return server.public === false;
        });
        let serverList = [];
        if (servers[0] !== undefined) {
            serverList = servers.map(server => {
                debugger
                return (
                    <li key={server.id}>
                        <Link to={`/me/${server.channels}`}>
                            <img src={window.iconGreen} className="serverIcon" />
                        </Link>
                    </li>
                )
            })
        }

        return(
            <div className="channelColumn">
                <section className="channelList">
                    <section className="channelHeader">
                        <span>{this.props.users[this.props.current_user_id].discord_username}</span>
                    </section>
                </section>

                <section className="serverList">
                    <ul className="serverIndex">
                        {serverList}
                    </ul>
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
        servers: state.entities.servers,
    });
};

const mDP = dispatch => {
    return ({
        logOut: () => dispatch(logOut()),
        fetchServers: (sessionID, isPublic) => dispatch(fetchServers(sessionID, isPublic)), 
    })
}

export default withRouter(connect(mSP, mDP)(MeIndex));