import React from "react";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {closeModal} from "../../actions/modal_actions";
import {createServer} from "../../actions/server_actions";
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
        let serverID = null;
        this.props.processForm({server_name: this.state.body, server_admin_id: userID, invite_key: "test"}).then(
            server => {
                serverID = server.server.id;
                this.props.createLink({ user_id: userID, server_id: serverID });
            }
        );
        this.props.closeModal();
    }

    render(){
        return(
            <div className="createChannelModal">
                <p>Create Server</p>
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
    }
}

export default withRouter(connect(mSP, mDP)(createServerModal));