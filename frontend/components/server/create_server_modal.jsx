import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {closeModal} from "../../actions/modal_actions";
import { createServer, fetchServers, clearServers} from "../../actions/server_actions";
import {createLink} from "../../actions/join_actions";

class createServerModal extends React.Component{
    constructor(props){
        super(props);
        this.state={body: ""};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const userID = this.props.currentUserID;
        let serverID;
        this.props.processForm({server_name: this.state.body, server_admin_id: userID, public: true}).then(
            server => {
                serverID = server.server.id;
                this.props.createLink({ user_id: userID, server_id: serverID });
                this.props.clearServers();
                this.props.fetchServers(this.props.currentUserID);
            }
        );
        this.props.closeModal();
    }

    render(){
        return(
            <div className="createChannelModal">
                <p>CREATE SERVER</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <section className="createChFormInput">
                        <span>SERVER NAME</span>
                        <input type="text" value={this.state.body} onChange={this.update("body")} />
                    </section>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Create Server" />
                    </section>
                </form> 
            </div>
        )
    }

}

const mSP = state => {
    return{
        currentUserID: state.session.id,
        
    };
};

const mDP = dispatch => {
    return{
        processForm: server => dispatch(createServer(server)),
        createLink: link => dispatch(createLink(link)),
        closeModal: () => dispatch(closeModal()),
        fetchServers: sessionID => dispatch(fetchServers(sessionID)),
        clearServers: () => dispatch(clearServers()),

    }
}

export default withRouter(connect(mSP, mDP)(createServerModal));