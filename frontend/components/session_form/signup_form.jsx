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

    emptyInputCheck() {
        let has_error = false;
        const fields = document.getElementsByClassName("userInput");
        for (let i = 0; i < fields.length; i++) {

            if (fields[i].children[1].value === "") {
                has_error = true;
                fields[i].children[1].classList.add("inputError");
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - This field is required";
            } else if (fields[i].children[0].children[0].innerText === "PASSWORD" &&
                fields[i].children[1].value.length < 6 || fields[i].children[1].value.length > 128) {
                has_error = true;
                fields[i].children[1].classList.add("inputError");
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Must be between 2 and 32 in length";
            } else if (fields[i].children[0].children[0].innerText === "USERNAME" &&
                fields[i].children[1].value.length < 2 || fields[i].children[1].value.length > 32) {
                has_error = true;
                fields[i].children[1].classList.add("inputError");
                fields[i].children[0].classList.add("textError");
                fields[i].children[0].children[1].innerHTML = " - Must be between 2 and 32 in length";
            } else {
                fields[i].children[1].classList.remove("inputError");
                fields[i].children[0].classList.remove("textError");
                fields[i].children[0].children[1].innerHTML = "";
            }
        }
        return has_error
    }

    handleSubmit(e){
        e.preventDefault();
        let has_error = this.emptyInputCheck();
        if (has_error === false) {
            this.props.logIn(this.state);
        }
    }

    
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
                        <span className="fieldType" name="text">
                            <span>EMAIL</span>
                            <span className="errorMessage"></span>
                        </span>
                        <input className="inputBox" name="input" type="text" onChange={this.update("email")} value={this.state.email}/>
                    </label>
                        <label className="userInput">
                        <span className="fieldType">
                            <span>USERNAME</span>
                            <span className="errorMessage"></span>
                        </span>
                        <input className="inputBox" type="text" onChange={this.update("discord_username")} value={this.state.discord_username} />
                    </label>
                        <label className="userInput">
                        <span className="fieldType">
                            <span>PASSWORD</span>
                            <span className="errorMessage"></span>
                        </span>
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