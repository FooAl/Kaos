import React from "react";
import {Link} from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: "",
            formType: window.location.pathname,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
        this.changeSet = this.changeSet.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state);
    }

    // componentWillUnmount() {
    //     debugger
    //     this.props.setEmail(this.state.email);
    // }

    // componentDidMount(){
    //     // debugger
    // }

    changeForm(){
        document.getElementsByClassName("loginPageBody")[0].classList.add("fadeOut");
        setTimeout(() => {this.changeSet();}, 300);
    }

    changeSet(){
        this.props.setEmail(this.state.email);
        this.props.setFormType("register");    
    }

    render() {
        return (
            <section className="loginPageBody">
                <section className="formForm">
                    <h1>Welcome back!</h1>
                    <p>We're so excited to see you again!</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span>email</span>
                            <input type="text" onChange={this.update("email")} value={this.state.email} />
                        </label>
                        <label>
                            <span>password</span>
                            <input type="password" onChange={this.update("password")} value={this.state.password} />
                        </label>
                        <input type="submit" value="continue" />
                    </form>
                    <p>Need an account? <span onClick={this.changeForm}>Register</span></p>
                </section>
            </section>
        )

    }
}

export default LoginForm;