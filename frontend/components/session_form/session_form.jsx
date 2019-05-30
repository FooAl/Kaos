import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./signup_form";
import LoginForm from "./login_form";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            formType: window.location.hash.slice(2),
            form: null,
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

    componentDidMount(){
        alert("Hey there");
        // if (this.state.formType === "register"){
        //     this.setState({ form: <SignupForm /> });
        // } else if (this.state.formType === "login"){
        //     this.setState({form: (<p>login form item</p>) });
        // } else {
        //     this.setState({form: (<p>error</p>) });
        // }
    }


    componentDidUpdate(prevProps){
        //switch formType to other form if prevProps.formType !== this.state.formType
        //set state.email and state.password to ""
        
        if (prevProps.match.url !== "/" + this.state.formType) {
            if (this.state.formType === "register") {
                this.props.history.push("/register");
                // this.setState({ form: <SignupForm /> });
            } else if (this.state.formType === "login") {
                this.props.history.push("login");
                // this.setState({ form: (<p>login form item</p>) });
            } else {
                // this.setState({ form: (<p>error</p>) });
            }
        }
    }

    render() {
        let form = <p>loading...</p>
        if(this.state.formType === "register"){
            form = <SignupForm/>
        }
        else if(this.state.formType === "login"){
            form = <LoginForm/>
        }
        return (
            <div className="formPage">
                <header className="formPageHeader">
                    <section className="formPageHeaderLeft">
                        Logo
                    </section>
                    <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
                    <button onClick={this.update("formType")} value="register">Signup</button>
                    <button onClick={this.update("formType")} value="login">Login</button>
                </header>
                <section className="formPageBody">
                    <section className="formForm">
                        <h1>{this.props.formType}</h1>
                        {form}
                        {/* <form onSubmit={this.handleSubmit}>
                            <label>
                                <span>email</span>
                                <input type="text" onChange={this.update("email")} value={this.state.email} />
                            </label>
                            <label>
                                <span>username</span>
                                <input type="text" onChange={this.update("discord_username")} value={this.state.discord_username} />
                            </label>
                            <label>
                                <span>password</span>
                                <input type="password" onChange={this.update("password")} value={this.state.password} />
                            </label>
                            <input type="submit" value="continue" />
                        </form> */}
                        <span>{this.props.navLink}</span>
                    </section>
                </section>
            </div>
        )

    }
}

export default SessionForm;