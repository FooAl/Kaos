import React from "react";
import { NavLink, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class ServerList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchServers(this.props.currentSessionid);
    }

    render(){
        let servers = Object.values(this.props.servers);
        let serverList = [];
        if(servers[0] !== undefined){
            serverList = servers.map(server => {
                return(
                    <li key={server.id} className="server">
                        <NavLink to={`/channels/${server.id}/`} activeClassName="currentServer">
                            <img src={window.iconGreen} className="serverIcon"/>
                        </NavLink>
                    </li>
                )
            })
        }
        return(
            <section className="serverList">
                <ul className="serverIndex">
                    <NavLink to="/me" className="meServer" activeClassName="currentServer">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>

                    <hr className="serverHR"/>

                    {serverList}

                    <div className="createServer" onClick={() => dispatch(this.props.openModal("createServer"))}>+</div>
                </ul>
                
            </section>
        )
    }
}

export default ServerList;