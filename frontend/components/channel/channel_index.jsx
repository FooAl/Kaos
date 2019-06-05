import React from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


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
            return (
            <NavLink to={`/channels/1/${channel.id}`} activeClassName="currentChannel">
                <li key={channel.id} className="channel">
                    <span className="channelHash"><FontAwesomeIcon icon={faHashtag} /></span>
                    <span className="channelName">{channel.channel_name}</span>
                </li>
            </NavLink>
            )
        })
        debugger
        return(
            <section className="channelIndex">
                <section className="subChannelIndex">
                    <section className="subChannelHeader">
                        <span>Text Channels</span>
                        <span className="subCreateButton" onClick={() => dispatch(this.props.openModal("createChannel"))}>+</span>
                    </section>
                    
                    <ul className="serverChannelList">{channelList}</ul>
                </section>
            </section>
        );
    }
}

export default ChannelIndex;