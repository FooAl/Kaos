import React from "react";
import {Link} from "react-router-dom";

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            discord_username: "",
            email: this.props.email,
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
        
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state);
    }

    // componentWillUnmount(){
    //     debugger
    //     this.props.setEmail(this.state.email);
    // }

    // componentDidMount() {
    //     debugger
    // }
    
    changeForm() {
        this.props.setEmail(this.state.email);
        this.props.setFormType("login");
    }

    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>email</span>
                    <input type="text" onChange={this.update("email")} value={this.state.email}/>
                </label>
                <label>
                    <span>username</span>
                    <input type="text" onChange={this.update("discord_username")} value={this.state.discord_username} />
                </label>
                <label>
                    <span>password</span>
                    <input type="password" onChange={this.update("password")} value={this.state.password} />
                </label>
                <input type="submit" value="continue"/>
            </form> 
            <p onClick={this.changeForm}>Login instead</p>      
            </>     
        )
    }
}

export default SignupForm;