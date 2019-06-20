import React from "react";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {closeModal} from "../../actions/modal_actions";
import {clearServers, deleteServer, fetchServers} from "../../actions/server_actions";

class deleteServerModal extends React.Component{
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
        this.props.processForm(this.props.history.location.pathname.split("/")[2]).then(
            server => {
            this.props.clearServers();
            this.props.fetchServers(this.props.currentUserID);
            }
        );        
        this.props.closeModal();
        this.props.history.push("/me");
    }

    render(){
        return(
            <div className="createChannelModal">
                <p>DELETE Server</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <p className="deleteText">Are you sure you want to delete this server? This cannot be undone.</p>
                    <section className="createChannelFooter">
                        <span className="closeCreate" ><div onClick={this.props.closeModal}>Cancel</div></span>
                        <input type="submit" className="createChannelButton" value="Delete Server" />
                    </section>
                </form> 
            </div>
        )
    }

}

const mSP = state => {
    return{
        currentUserID: state.session.id,
        servers: state.entities.servers,
        
    };
};

const mDP = dispatch => {
    return{
        processForm: server => dispatch(deleteServer(server)),
        closeModal: () => dispatch(closeModal()),
        clearServers: () => dispatch(clearServers()),
        fetchServers: sessionID => dispatch(fetchServers(sessionID)),
    }
}

export default withRouter(connect(mSP, mDP)(deleteServerModal));