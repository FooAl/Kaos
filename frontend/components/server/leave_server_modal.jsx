import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { clearServers, fetchServers } from "../../actions/server_actions";
import {fetchLinks, deleteLink} from "../../actions/join_actions";

class leaveServerModal extends React.Component {
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

    componentDidMount(){
        this.props.fetchLinks(this.props.history.location.pathname.split("/")[2])
    }

    handleSubmit(e) {
        e.preventDefault();
        let joinID = this.props.joins[this.props.history.location.pathname.split("/")[2]][this.props.currentUserID].id;
        this.props.processForm(joinID).then(
            server => {
                this.props.clearServers();
                this.props.fetchServers(this.props.currentUserID)
            }
        );
        this.props.closeModal();
        this.props.history.push("/me");
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>LEAVE SERVER</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <p className="deleteText">Are you sure you want to leave this server?</p>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Leave Server" />
                    </section>
                </form>
            </div>
        )
    }

}

const mSP = state => {
    return {
        currentUserID: state.session.id,
        servers: state.entities.servers,
        joins: state.entities.joins,

    };
};

const mDP = dispatch => {
    return {
        processForm: linkID => dispatch(deleteLink(linkID)),
        closeModal: () => dispatch(closeModal()),
        clearServers: () => dispatch(clearServers()),
        fetchServers: sessionID => dispatch(fetchServers(sessionID)),
        fetchLinks: serverID => dispatch(fetchLinks(serverID)),
    }
}

export default withRouter(connect(mSP, mDP)(leaveServerModal));