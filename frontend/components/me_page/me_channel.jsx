import React from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {fetchServers, clearServers} from "../../actions/server_actions";
import { logOut } from "../../actions/session_actions";
import {openModal} from "../../actions/modal_actions";

class MeIndex extends React.Component {

    componentDidMount(){
        this.props.clearServers();
        this.props.fetchServers(this.props.current_user_id, false);
    }

    render() {
        
        let servers = Object.values(this.props.servers);
        
        servers = servers.filter(function(server){
            return server.public === false;
        });
        let serverList = [];
        if (servers[0] !== undefined) {
            if(servers)
            serverList = servers.map(server => {
                let otherUser;
                if(server.users.user_1 !== this.props.users[this.props.current_user_id].discord_username){
                    otherUser = server.users.user_1;
                }else{
                    otherUser = server.users.user_2;
                }
                return (
                    <NavLink to={`/me/${server.first_channel_id}`} activeClassName="currentDM" key={server.id}>
                            <li className="dm" >
                                <section className="channelLeft">
                                    <img src={window.iconGreen} className="dmIcon" />
                                    <span className="dmUsername">{otherUser}</span>
                                </section>
                                <section className="buttons">
                                </section>
                            </li>  
                        </NavLink>
                )
            })
        }

        return(
            <div className="channelColumn">
                <section className="channelList">
                    <section className="channelHeader">
                        <span>{this.props.users[this.props.current_user_id].discord_username}</span>
                    </section>
                    <section className="dmList">
                        <section className="subDMIndex">
                            <section className="subChannelHeader">
                                <span>Direct Messages</span>
                                <span className="subCreateButton" onClick={() => dispatch(this.props.openModal("createDM"))}>+</span>
                            </section>
                            <ul className="serverIndex">
                                {serverList}
                            </ul>
                        </section>
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
        servers: state.entities.servers,
    });
};

const mDP = dispatch => {
    return ({
        logOut: () => dispatch(logOut()),
        openModal: field => dispatch(openModal(field)),
        fetchServers: (sessionID, isPublic) => dispatch(fetchServers(sessionID, isPublic)), 
        clearServers: () => dispatch(clearServers()),

    })
}

export default withRouter(connect(mSP, mDP)(MeIndex));