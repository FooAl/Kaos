import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { editChannel } from "../../actions/channel_actions";

class editChannelModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const location = this.props.history.location.pathname.split("/");
        const serverID = location[2];
        const channelID = location[3];
        this.props.processForm({ channel_name: this.state.body, server_id: serverID, id: channelID });
        this.props.closeModal();
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>EDIT TEXT CHANNEL</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>CHANNEL NAME</span>
                        <input type="text" value={this.state.body} onChange={this.update("body")} />
                    </section>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Update Channel" />
                    </section>
                </form>
            </div>

        )
    }
}

const mDP = dispatch => {
    return {
        processForm: channel => dispatch(editChannel(channel)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(null, mDP)(editChannelModal));
