import React from "react";
import ServerList from "../server/server_list_container";
import MeChannel from "./me_channel"

class MePage extends React.Component {

    render() {
        return (
            <div className="chatPage">
                <ServerList />
                <MeChannel />
            </div>
        )
    }
}

export default MePage;