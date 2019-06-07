import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createLink } from "../../actions/join_actions";
import { clearServers, fetchServers } from "../../actions/server_actions";


class joinServerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const userID = this.props.currentUserID;
        this.props.processForm({ user_id: userID, invite_key: this.state.body }).then(
            () => {
            this.props.clearServers();
            this.props.fetchServers(this.props.currentUserID);
            }
        );
        this.props.closeModal();
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>JOIN SERVER</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>INVITE KEY</span>
                        <input type="text" value={this.state.body} onChange={this.update("body")} />
                    </section>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Join Server" />
                    </section>
                </form>
            </div>
        )
    }

}

const mSP = state => {
    return {
        currentUserID: state.session.id,

    };
};

const mDP = dispatch => {
    return {
        processForm: link => dispatch(createLink(link)),
        closeModal: () => dispatch(closeModal()),
        clearServers: () => dispatch(clearServers()),
        fetchServers: sessionID => dispatch(fetchServers(sessionID)),
    }
}

export default withRouter(connect(mSP, mDP)(joinServerModal));