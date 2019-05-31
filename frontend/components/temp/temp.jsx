import React from "react";
import { Link } from "react-router-dom";

class Temp extends React.Component{

    render(){
        return (
        <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
    )}
}

export default Temp;