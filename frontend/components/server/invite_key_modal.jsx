import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import {fetchServer} from "../../actions/server_actions";

class inviteKeyModal extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchServer(this.props.history.location.pathname.split("/")[2])
    }


    render(){
        const inviteKey = this.props.servers[this.props.history.location.pathname.split("/")[2]].invite_key;
        return(
            <div className="createChannelModal">
                <section className="createChFormInput">
                    <div className="inviteKeyForm">
                        <span>INVITE KEY</span>
                        <span className="inviteKey">{inviteKey}</span>
                    </div> 
                </section>
            
                <section className="createChannelFooter">
                    <span className="closeCreate" ><div onClick={this.props.closeModal}>Close</div></span>
                </section>
            </div>
        )
    }

}

const mSP = state => {
    return {
        servers: state.entities.servers
    };
};

const mDP = dispatch => {
    return {
        processForm: server => dispatch(editServer(server)),
        fetchServer: serverID => dispatch(fetchServer(serverID)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mSP, mDP)(inviteKeyModal));