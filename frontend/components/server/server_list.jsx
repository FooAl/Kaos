import React from "react";
import { Link } from "react-router-dom";

class ServerList extends React.Component{

    render(){
        
        return(
            <section className="serverList">
                <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
            </section>
        )
    }
}

export default ServerList;