import React from "react";
import SignupForm from "./signup_form_container";
import LoginForm from "./login_form_container";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            formType: window.location.hash.slice(2),
            form: null,
            errors: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setEmail = ((newEmail) => this.setState({email: newEmail})).bind(this);
        this.setFormType = ((formType) => this.setState({formType: formType})).bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state);
    }


    componentDidUpdate(prevProps){
        if (prevProps.match.url !== "/" + this.state.formType) {
            if (this.state.formType === "register") {
                this.props.history.push("/register");
            } else if (this.state.formType === "login") {
                this.props.history.push("login");
            } else {
            }
        }
        
    }

    render() {
        let form = <p>loading...</p>
        if(this.state.formType === "register"){
            form = <SignupForm email={this.state.email} setEmail={this.setEmail} setFormType={this.setFormType}/>
        }
        else if(this.state.formType === "login"){
            form = <LoginForm email={this.state.email} setEmail={this.setEmail} setFormType={this.setFormType}/>
        }
        return (
            <div className="formPage">
                <section id="background">
                    <img className="under" src={window.formBG}/>
                    <img className="top" src={window.formSplash}/>
                </section>
                <header className="formPageHeader">
                    <section className="formPageHeaderLeft">
                        <img className="logo" src={window.discordLogo} height="18%"/>
                    </section>
                </header>
                {form}
            </div>
        )

    }
}

export default SessionForm;