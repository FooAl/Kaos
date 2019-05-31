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
        let has_error = false;
        const fields = document.getElementsByClassName("userInput");
        for(let i = 0; i < fields.length; i++)
        {   debugger
            if (fields[i].children[1].value === ""){
                has_error = true;
                fields[i].children[1].classList.add("inputError");
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - This field is required";
            } else if (fields[0].children[0].children[0].innerText === "EMAIL" 
                && (fields[i].children[1].value.length < 2
                    || fields[i].children[1].value.length > 32)){
                has_error = true;
                fields[i].children[1].classList.add("inputError");
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Must be between 2 and 32 in length";
            }else{
                fields[i].children[1].classList.remove("inputError");
                fields[i].children[0].classList.remove("textError");
                fields[i].children[0].children[1].innerHTML = "";
            }
        }
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
        return (
            <section className="loginPageBody">
                <section className="formForm">
                    <h1>Welcome back!</h1>
                    <p>We're so excited to see you again!</p>
                    <form className="formEntry" onSubmit={this.handleSubmit}>
                        <label className="userInput">
                            <span className="fieldType" name="email">
                            <span>EMAIL</span>
                            <span className="errorMessage"></span></span>
                            <input className="inputBox" type="text" onChange={this.update("email")} value={this.state.email} />
                        </label>
                        <label className="userInput">
                            <span className="fieldType" name="password"><span>PASSWORD</span><span className="errorMessage"></span></span>
                            <input className="inputBox" type="password" onChange={this.update("password")} value={this.state.password} />
                        </label>
                        <input type="submit" value="Login" />
                    </form>
                    <p>Need an account? <span className="formTransition" onClick={this.changeForm}>Register</span></p>
                </section>
            </section>
        )

    }
}

export default LoginForm;