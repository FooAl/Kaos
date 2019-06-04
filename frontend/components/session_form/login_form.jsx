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
        this.clearErrors = this.clearErrors.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    renderErrors() {
        const fields = document.getElementsByClassName("userInput");
        if (this.props.errors.errors.responseText === "Email does not exist") {
            fields[0].children[1].required = true;
            fields[0].children[0].classList.add("textError");
            fields[0].children[0].children[1].innerHTML = " - Email does not exist."
        } else if (this.props.errors.errors.responseText === "Password does not match") {
            fields[1].children[1].required = true;
            fields[1].children[0].classList.add("textError");
            fields[1].children[0].children[1].innerHTML = " - Password does not match."
        } 
    }

    clearErrors() {
        this.props.emptyErrors();
    }

    emptyInputCheck(){
        let has_error = false;
        const fields = document.getElementsByClassName("userInput");
        for (let i = 0; i < fields.length; i++) {    
            if (fields[i].children[1].value === "") {  
                has_error = true;
                fields[i].children[1].required = true;
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - This field is required";
            } else {
                fields[i].children[1].required = false;
                fields[i].children[0].classList.remove("textError");
                fields[i].children[0].children[1].innerHTML = "";
            }
        }
        return has_error;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.emptyErrors();
        let has_error = this.emptyInputCheck();
        if (has_error === false){
            this.props.logIn(this.state);
        }
    }

    changeForm(){
        document.getElementsByClassName("loginPageBody")[0].classList.add("fadeOut");
        setTimeout(() => {this.changeSet();}, 500);
    }

    changeSet(){
        this.props.setEmail(this.state.email);
        this.props.setFormType("register");    
    }

    render() {
        this.renderErrors();
        return (
            <section className="loginPageBody">
                <section className="formForm">
                    <h1>Welcome back!</h1>
                    <p>We're so excited to see you again!</p>
                    <form className="formEntry" onSubmit={this.handleSubmit}>
                        <label className="userInput">
                            <span className="fieldType" name="email">
                                <span>EMAIL</span>
                                <span className="errorMessage"></span>
                            </span>
                            <input className="inputBox" type="text" onChange={this.update("email")} value={this.state.email} />
                        </label>
                        <label className="userInput">
                            <span className="fieldType" name="password">
                                <span>PASSWORD</span>
                                <span className="errorMessage"></span>
                            </span>
                            <input className="inputBox" type="password" onChange={this.update("password")} value={this.state.password} />
                        </label>
                        <input type="submit" value="Login" />
                        <p className="switchLink">Need an account? <span className="formTransition" onClick={this.changeForm}>Register</span></p>
                    </form>
                    
                </section>
            </section>
        )

    }
}

export default LoginForm;