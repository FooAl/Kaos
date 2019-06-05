import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createChannel} from "../../actions/channel_actions";

class createChannelModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const serverID = this.props.history.location.pathname.split("/")[2];
        this.props.processForm({channel_name: this.state.body, server_id: serverID});
        this.props.closeModal();
    }

    render (){
        return(
            <div className="createChannelModal">
                <p>Create Text Channel</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update("body")}/>
                    <section className="createChannelFooter">
                        <button type="button" className="closeCreate" onClick={this.props.closeModal}>Cancel</button>
                        <input type="submit" className="createChannelButton" value="Create Channel" />
                    </section>
                
                </form>
                
            </div>

        )
    }
}

const mDP = dispatch =>{
    return {
        processForm: channel => dispatch(createChannel(channel)),
        closeModal: () => dispatch(closeModal()),
    }
}

// const connected = connect(null, mDP)(createChannelModal);
// const routed = withRouter(createChannelModal)›


export default withRouter(connect(null, mDP)(createChannelModal));

// export default connect(null, mDP)(createChannelModal);