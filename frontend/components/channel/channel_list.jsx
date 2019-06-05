import React from "react";
import ChannelIndex from "./channel_index_container";

class ChannelList extends React.Component{
    render(){
        return(
            <>
                <section className="channelList">Channel List</section>
                <ChannelIndex />
            </>
        )
    }
}

export default ChannelList;