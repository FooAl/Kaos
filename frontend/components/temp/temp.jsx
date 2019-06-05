import React from "react";
import { Link, Route} from "react-router-dom";
import ChatRoom from "../chat_page/chat_room/chat_room_container";
import ServerList from "../server/server_list_container";
import ServerUserList from "../server/server_user_list";
import ChannelList from "../channel/channel_list";

class Temp extends React.Component{

    render(){
        return (
            <div className="chatPage">
                <ServerList />
                <ChannelList />
                <Route exact path="/channels/1/:id" component={ChatRoom} />
                <ServerUserList />
            </div>
    )}
}

export default Temp;