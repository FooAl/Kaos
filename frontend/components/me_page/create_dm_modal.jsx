import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createServer, fetchServers, clearServers } from "../../actions/server_actions";
import { createChannel } from "../../actions/channel_actions";
import { validUser } from "../../actions/user_actions";
import { createLink } from "../../actions/join_actions";
import { emptyErrors } from "../../actions/session_actions";

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
        debugger
        this.props.emptyErrors();
        const userID = this.props.currentUserID;
        let serverID;
        let otherID;
        let errors = this.props.errors.errors;
        const errorElement = document.getElementsByClassName("errorMessage");
        this.props.validUser({ discord_username: this.state.body, type: "find_by_name"}).then((user) => {
            otherID = user.user.id
            if(errors.length === 0){
                this.props.processForm({ server_name: "Direct Message", server_admin_id: userID, public: false}).then(
                    server => {
                        errorElement[0].innerHTML = "";
                        serverID = server.server.id;
                        this.props.createChannel({ channel_name: "Direct Message", server_id: serverID, public: false});
                        this.props.createLink({ user_id: userID, server_id: serverID });
                        this.props.createLink({ user_id: otherID, server_id: serverID});
                        this.props.clearServers();
                        this.props.fetchServers(userID, false);
                        this.props.closeModal();
                    }
                )
            }
        }, () => {
            errorElement[0].innerHTML = " - User does not exist";
        }
        );
        
    }

    render() {
        return (
            <div className="createChannelModal">
                <p>START DIRECT MESSAGE</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>USERNAME</span> <span className="errorMessage"></span>
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
        errors: state.errors,
    }
}

const mDP = dispatch => {
    return {
        processForm: server => dispatch(createServer(server)),
        createChannel: channel => dispatch(createChannel(channel)),
        createLink: link => dispatch(createLink(link)),
        closeModal: () => dispatch(closeModal()),
        validUser: user => dispatch(validUser(user)),
        emptyErrors: () => dispatch(emptyErrors()),
        fetchServers: (sessionID, isPublic) => dispatch(fetchServers(sessionID, isPublic)), 
        clearServers: () => dispatch(clearServers()),
    }
}

export default withRouter(connect(mSP, mDP)(createDMModal));