import React from "react";
import { NavLink } from "react-router-dom";

class ServerList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchServers(this.props.currentSessionid);
    }

    render(){
        let servers = Object.values(this.props.servers);
        const serverList = servers.map(server => {
            return(
                <li key={server.id} className="server">
                    <NavLink to={`/channels/${server.id}/`} activeClassName="currentServer">
                        <img src={window.iconGreen} className="serverIcon"/>
                    </NavLink>
                </li>
            )
        })

        return(
            <section className="serverList">
                <ul className="serverIndex">
                    {serverList}
                </ul>
                
            </section>
        )
    }
}

export default ServerList;