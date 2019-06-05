import React from "react";
import {Link} from "react-router-dom";

class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            channels: this.props.channels
        }
    }

    componentDidMount(){
        this.props.fetchChannels(1);
    }

    render(){
        let channels = Object.values(this.props.channels)
        const channelList = channels.map(channel => {
            return <li key={channel.id} className="channel">
                <Link to={`/channels/1/${channel.id}`}>{channel.channel_name}</Link>
            </li>
        })
        return(
            <>
                <h1>{channelList}</h1>
            </>
        );
    }
}

export default ChannelIndex;