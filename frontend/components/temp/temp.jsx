import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "../chat_page/chat_room/chat_room_container";

class Temp extends React.Component{

    render(){
        return (
            <>
                <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
                <ChatRoom />
            </>
    )}
}

export default Temp;