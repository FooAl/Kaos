import React from "react";
import {Provider} from "react-redux";
import {Route, Redirect, Switch, Link, HashRouter} from "react-router-dom";

//import containers
import MainPage from "./mainpage/mainpage";
// import SignupForm from "./session_form/signup_form_container";
// import LoginForm from "./session_form/login_form_container";
import SessionForm from "./session_form/session_form_container";

const App = () => {
    return (
        <div className="mainView">
            <Switch>
                <Route path="/register" component={SessionForm}/>
                <Route path="/login" component={SessionForm}/>
                
                {/* logged in */}
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;