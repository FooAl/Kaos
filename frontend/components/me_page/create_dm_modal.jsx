import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createServer } from "../../actions/server_actions";
import { createChannel } from "../../actions/channel_actions";
import { createLink } from "../../actions/join_actions";

class createDMModal extends React.Component{
    constructor(props){
        super(props);
        this.state={body: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>CREATE DIRECT MESSAGE</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>USERNAME</span>
                        <input type="text" value={this.state.body} onChange={this.update("body")} />
                    </section>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Create DM" />
                    </section>
                </form>
            </div>
        )
    }

    

}

const mSP = state => {
    return {
        currentUserID: state.session.id,
    }
}

const mDP = dispatch => {
    return {
        processForm: server => dispatch(createServer(server)),
        createChannel: channel => dispatch(createChannel(channel)),
        createLink: link => dispatch(createLink(link)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mSP, mDP)(createDMModal));