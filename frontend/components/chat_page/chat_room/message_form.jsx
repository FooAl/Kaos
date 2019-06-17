import React from "react";
import {withRouter} from "react-router";

class MessageForm extends React.Component{
    constructor (props){
        super(props);
        this.state = { body: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field){
        return(e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }
    

    handleSubmit(e){
        e.preventDefault();
        debugger
        App.cable.subscriptions.subscriptions[0].speak({message: this.state.body, 
                            user_id: this.props.current_user, channel_id: this.props.match.params.id});
        this.setState({body: ""});
    }
    
    render(){
        return(
            <div>
                <form className="messageInput" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update("body")} placeholder={`Message #${this.props.channelName}`}/>                    
                </form>
            </div>
        )
    }

}

export default withRouter(MessageForm);