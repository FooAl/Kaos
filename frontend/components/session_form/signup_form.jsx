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
        this.changeSet = this.changeSet.bind(this);
        
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
        document.getElementsByClassName("signupPageBody")[0].classList.add("fadeOut");
        setTimeout(() => { this.changeSet(); }, 300);
    }

    changeSet() {
        this.props.setEmail(this.state.email);
        this.props.setFormType("login");
    }

    render(){
        return (
            <section className="signupPageBody">
                <section className="formForm">
                <h1>Create an account</h1>
                    <form className="formEntry" onSubmit={this.handleSubmit}>
                    <label className="userInput">
                        <span className="fieldType">EMAIL</span>
                        <input className="inputBox" type="text" onChange={this.update("email")} value={this.state.email}/>
                    </label>
                        <label className="userInput">
                        <span className="fieldType">USERNAME</span>
                        <input className="inputBox" type="text" onChange={this.update("discord_username")} value={this.state.discord_username} />
                    </label>
                        <label className="userInput">
                        <span className="fieldType">PASSWORD</span>
                        <input className="inputBox" type="password" onChange={this.update("password")} value={this.state.password} />
                    </label>
                    <input type="submit" value="Continue"/>
                </form> 
                <p><span className="formTransition" onClick={this.changeForm}>Already have an account?</span> </p>     
                </section>
            </section>     
        )
    }
}

export default SignupForm;