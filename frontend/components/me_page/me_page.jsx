import React from "react";
import ServerList from "../server/server_list_container";
import MeChannel from "./me_channel";
import {Route} from "react-router-dom";
import ChatRoom from "../chat_page/chat_room/chat_room_container";


class MePage extends React.Component {

    render() {
        return (
            <div className="chatPage">
                <ServerList />
                <MeChannel />
                <Route exact path="/me/:id" component={ChatRoom} />
            </div>
        )
    }
}

export default MePage;