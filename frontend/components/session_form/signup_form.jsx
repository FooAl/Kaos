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
        this.clearErrors = this.clearErrors.bind(this);        
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    emailChecker(){
        let has_error = false;
        const emailArray = this.state.email.split("@");
        const formatError1 = document.getElementsByClassName("formatError1")[0];
        const formatError2 = document.getElementsByClassName("formatError2")[0];
        const triangle = document.getElementsByClassName("triangle")[0];
        if(emailArray.length === 1 && emailArray[0] !== ""){
            formatError2.classList.remove("hidden");
            triangle.classList.remove("hidden");
            formatError1.classList.add("hidden");
            triangle.classList.add("hidden");
            has_error = true;
        }else if(emailArray.length === 3){
            formatError1.classList.remove("hidden");
            triangle.classList.remove("hidden");
            formatError2.classList.add("hidden");
            triangle.classList.add("hidden");
            has_error = true;
        }else{
            formatError1.classList.remove("hidden");
            formatError2.classList.remove("hidden");
            triangle.classList.remove("hidden");
        }
        return has_error;
    }

    renderErrors() {
        const fields = document.getElementsByClassName("userInput");
        if (this.props.errors.errors.length !== 0) {
            fields[0].children[1].required = true;
            fields[0].children[0].classList.add("textError");
            fields[0].children[0].children[1].innerHTML = " - Email is already registered"
        }
    }

    clearErrors(){
        this.props.emptyErrors();
    }

    emptyInputCheck() {
        let has_error = false;
        const fields = document.getElementsByClassName("userInput");
        for (let i = 0; i < fields.length; i++) {

            if (fields[i].children[1].value === "") {
                has_error = true;
                fields[i].children[1].required = true;
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - This field is required";
            } else if (fields[i].children[0].children[0].innerText === "EMAIL" &&
                this.state.email.split("@")[1].includes(".") === false){
                has_error = true;
                fields[i].children[1].required = true;
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Not a well formed email address";
            } else if (fields[i].children[0].children[0].innerText === "USERNAME" &&
                this.state.discord_username.length < 2 || this.state.discord_username.length > 32) {
                has_error = true;
                fields[i].children[1].required = true;
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Must be between 2 and 32 in length";
            } else if (fields[i].children[0].children[0].innerText === "PASSWORD" &&
                this.state.password.length < 6 || this.state.password.length > 128) {
                has_error = true;
                fields[i].children[1].required = true;
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Must be between 6 and 128 in length";
            } else {
                fields[i].children[1].required = false;
                fields[i].children[0].classList.remove("textError");
                fields[i].children[0].children[1].innerHTML = "";
            }
        }
        return has_error;
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.emptyErrors();
        if(this.emailChecker() === false){
            const inputError = this.emptyInputCheck();
            if (inputError === false) {
                this.props.signUp(this.state);
            }
        }
    }
    
    changeForm() {
        this.props.emptyErrors();
        document.getElementsByClassName("signupPageBody")[0].classList.add("fadeOut");
        setTimeout(() => { this.changeSet(); }, 300);
    }

    changeSet() {
        this.props.setEmail(this.state.email);
        this.props.setFormType("login");
    }

    render(){
        let email = this.state.email;
        this.renderErrors();
        return (
            <section className="signupPageBody">
                <section className="formForm">
                <h1>Create an account</h1>
                    <form className="formEntry" onSubmit={this.handleSubmit}>
                        <label className="userInput">
                            <span className="fieldType" name="text">
                                <span>EMAIL</span>
                                <span className="errorMessage"></span>
                            </span>
                            <input className="inputBox" name="input" type="text" onChange={this.update("email")} value={this.state.email}/>
                            <span className="formatError">
                                <div className="triangle"></div>
                                <span className="formatError1">Please include an '@' in the email address. {email} is missing an '@'</span>
                                <span className="formatError2">A part following '@' should not contain the symbol '@'.</span>
                            </span>
                        </label>

                        <label className="userInput">
                            <span className="fieldType">
                                <span>USERNAME</span>
                                <span className="errorMessage"></span>
                            </span>
                            <input className="inputBox" type="text" onChange={this.update("discord_username")} value={this.state.discord_username}/>
                        </label>

                        <label className="userInput">
                            <span className="fieldType">
                                <span>PASSWORD</span>
                                <span className="errorMessage"></span>
                            </span>
                            <input className="inputBox" type="password" onChange={this.update("password")} value={this.state.password} />
                        </label>
                        <input type="submit" value="Continue"/>
                        <p className="switchLink"><span className="formTransition" onClick={this.changeForm}>Already have an account?</span> </p>
                    </form>   
                </section>
            </section>     
        )
    }
}

export default SignupForm;