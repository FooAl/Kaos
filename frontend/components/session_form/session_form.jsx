import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./signup_form_container";
import LoginForm from "./login_form_container";

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
        // let base = document.getElementById("base");
        // base.className = "";
        // base.classList.add("formBG");
        // alert("Hey there");
        // if (this.state.formType === "register"){
        //     this.setState({ form: <SignupForm /> });
        // } else if (this.state.formType === "login"){
        //     this.setState({form: (<p>login form item</p>) });
        // } else {
        //     this.setState({form: (<p>error</p>) });
        // }
    }

    componentWillUnmount(){
        // debugger
        // document.getElementById("base").classList.remove("formBG");
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
            {/* <div style="background-image: src:(url);"></div> */}
                <header className="formPageHeader">
                    <section className="formPageHeaderLeft">
                        Logo
                    </section>
                    <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
                    {/* <button onClick={this.update("formType")} value="register">Signup</button> */}
                    {/* <button onClick={this.update("formType")} value="login">Login</button> */}
                </header>
                {form}
            </div>
        )

    }
}

export default SessionForm;