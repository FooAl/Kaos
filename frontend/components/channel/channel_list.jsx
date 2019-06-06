import React from "react";
import ChannelIndex from "./channel_index_container";
import {connect} from "react-redux";

class ChannelList extends React.Component{
    render(){
        return(
            <div className="channelColumn">
                <section className="channelList">
                    <section className="channelHeader">Server Name</section>
                    <ChannelIndex />
                </section>

                <section className="subChannelFooter">
                    <img className="userIcon" src={window.iconGreen} />
                    <span>{this.props.users[this.props.current_user_id].discord_username}</span>
                </section>
            </div>
        )
    }
}

const mSP = state => {
    return ({
        channels: state.entities.channels,
        users: state.entities.users,
        current_user_id: state.session.id,
    });
};



export default connect(mSP)(ChannelList);