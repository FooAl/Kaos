import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';


class ChannelIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            channels: this.props.channels
        }
    }

    componentDidMount(){
        const serverID = this.props.history.location.pathname.split("/")[2];
        this.props.fetchChannels(serverID);
    }

    render(){
        let channels = Object.values(this.props.channels)
        const channelList = channels.map(channel => {
            return (
                <NavLink to={`/channels/1/${channel.id}`} activeClassName="currentChannel" key={channel.id}>
                <li className="channel">
                    <section>
                        <span className="channelHash"><FontAwesomeIcon icon={faHashtag} /></span>
                        <span className="channelName">{channel.channel_name}</span>
                    </section>
                    <section className="buttons">
                        <span className="editChannel" onClick={() => dispatch(this.props.openModal("editChannel"))}><FontAwesomeIcon icon={faCog} /></span>
                        <span className="deleteChannel" onClick={() => dispatch(this.props.openModal("deleteChannel"))}><FontAwesomeIcon icon={faTrash} /></span>
                    </section>
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

export default withRouter(ChannelIndex);