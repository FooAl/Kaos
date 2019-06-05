import React from "react";
import {connect, withRouter} from "react-redux";

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
        debugger
        e.preventDefault();
        this.props.processForm({channel_name: this.state.body, server_id: this.props.match.params.id});
    }

    render (){
        return(
            <div className="createChannelModal">
                <p>Create Text Channel</p>
                <form className="createChannelInput" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update("body")}/>
                    <section className="createChannelFooter">
                        <button className="closeCreate">Cancel</button>
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
// const routed = withRouter(createChannelModal)


export default connect(null, mDP)(createChannelModal);