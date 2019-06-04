import React from "react";
import MessageForm from "./message_form_container";

class ChatRoom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            pastHistory: 50,
        };
        this.bottom = React.createRef();
    }

    componentDidMount(){
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data)
                    });
                },
                speak: function(data){return this.perform("speak",data);}
            }
        );
        this.props.fetchMessages(1);
        
    }

    componentDidUpdate(){
        this.bottom.current.scrollIntoView();
    }


    convertTime(timeStamp){
        const created_at = new Date(timeStamp);
        let hours = created_at.getHours();
        const minutes = created_at.getMinutes();
        let dayNight = "";    
        
        if ((hours) > 12){
            dayNight = "pm";
            hours %= 12;
        } else{
            dayNight = "am";
        }

        return `${this.addZero(hours)}:${this.addZero(minutes)} ${dayNight}`;
    }

    addZero(num){
        if(num < 10){
            return `0${num}`;
        }
        return num;
    }

    convertDay(timeStamp){
        const today = new Date();
        const created_at = new Date(timeStamp);
        if((today.getMonth === created_at.getMonth && 
            today.getDate === created_at.getDate)){
                return "Today";
        }else{
            return `${today.getMonth}/${today.getDate}`;
        }
    }

    render(){
        let oldMessages = Object.values(this.state.messages);
        let newMessages = Object.values(this.props.messages);
        const messageList = newMessages.concat(oldMessages).map(message => {
            const time = this.convertTime(message.created_at);
            const day = this.convertDay(message.created_at);
            return (
                <li key={message.id} className="message">
                    <section className="messageAuthor">
                        {this.props.users[message.user_id].discord_username} <span className="messageDate"> 
                            {day} at {time}
                        </span>
                    </section>
                    <section className="messageContent" >{message.content}</section>
                    <div ref={this.bottom}/>
                </li>
            );
        });

        // const messageList = "This is a test message";
        return (
            <section className="messageList">
                <ul>
                    {messageList}
                </ul>
                <div ref={this.bottom} />
                <MessageForm/>
            </section>
        );
    }

}

export default ChatRoom;