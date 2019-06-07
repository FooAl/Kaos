import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { editServer } from "../../actions/server_actions";

class editServerModal extends React.Component {
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
        const location = this.props.history.location.pathname.split("/");
        const serverID = location[2];
        this.props.processForm({ server_name: this.state.body, id: serverID});
        this.props.closeModal();
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>EDIT SERVER</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>SERVER NAME</span>
                        <input type="text" value={this.state.body} onChange={this.update("body")} />
                    </section>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Edit Server" />
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
        processForm: server => dispatch(editServer(server)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mSP, mDP)(editServerModal));