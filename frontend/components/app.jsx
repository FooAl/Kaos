import React from "react";
import {Provider} from "react-redux";
import {Route, Redirect, Switch, Link, HashRouter} from "react-router-dom";

//import containers
import MainPage from "./mainpage/mainpage";
import SignupForm from "./session_form/signup_form_container";
import LoginForm from "./session_form/login_form_container";

const App = () => {
    return (
        <div className="mainView">
            <Switch>
                <Route path="/api/register" component={SignupForm}/>
                <Route path="/api/login" component={LoginForm}/>
                {/* logged in */}
                <Route path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;