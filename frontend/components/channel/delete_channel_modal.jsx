import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { deleteChannel } from "../../actions/channel_actions";

class deleteChannelModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const channelID = this.props.history.location.pathname.split("/")[3];
        this.props.processForm(channelID);
        this.props.closeModal();
    }

    render() {
        debugger
        const channelName = this.props.channels[this.props.history.location.pathname.split("/")[3]].channel_name;
        return (
            <div className="createChannelModal">
                <p>DELETE CHANNEL</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <p className="deleteText">Are you sure you want to delete <span>#{channelName}</span>? This cannot be undone.</p>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>No</div></span>
                        <input type="submit" className="createChannelButton" value="Yes" />
                    </section>
                </form>
            </div>

        )
    }
}

const mSP = state => {
    return ({
        channels: state.entities.channels,
    })
}

const mDP = dispatch => {
    return {
        processForm: channelID => dispatch(deleteChannel(channelID)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mSP, mDP)(deleteChannelModal));
