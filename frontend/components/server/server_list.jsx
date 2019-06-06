import React from "react";
import { Link } from "react-router-dom";

class ServerList extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchServers(this.props.currentSessionid);
    }

    render(){
        let servers = Object.values(this.props.servers)
        const serverList = servers.map(server => {
            return(
                <li key={server.id} className="server">
                    {server.server_name}
                </li>
            )
        })

        return(
            <section className="serverList">
                <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
                {serverList}
            </section>
        )
    }
}

export default ServerList;