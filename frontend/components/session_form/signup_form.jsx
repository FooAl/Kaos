import React from "react";
import {Link} from "react-router-dom";

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            discord_username: "",
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render(){
        return (
            <div className="formPage">
                <header className="formPageHeader">
                    <section className="formPageHeaderLeft">
                        Logo
                    </section>
                    <Link to="/" onClick={() => this.props.logOut()}>Logout</Link>
                </header>
                <section className="formPageBody">
                    <section className="formForm">
                        <h1>{this.props.formType}</h1>
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
                        <span>{this.props.navLink}</span>
                    </section>
                </section>
            </div>
        )

    }
}

export default SignupForm;