import React from "react";
import {Provider} from "react-redux";
import {Route, Redirect, Switch, Link, HashRouter} from "react-router-dom";

//import containers
import MainPage from "./mainpage/mainpage_container";
// import SignupForm from "./session_form/signup_form_container";
// import LoginForm from "./session_form/login_form_container";
import SessionForm from "./session_form/session_form_container";
import Temp from "./temp/temp_container";
import {AuthRoute, ProtectedRoute} from "../util/route_util";

const App = () => {
    return (
        <div className="mainView">
            <Switch>
                <AuthRoute path="/register" component={SessionForm}/>
                <AuthRoute path="/login" component={SessionForm}/>
                <ProtectedRoute path="/me" component={Temp}/>
                {/* logged in */}
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;