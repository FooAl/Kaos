import React from "react";
import {Link} from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formType: window.location.pathname,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
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
        )

    }
}

export default LoginForm;