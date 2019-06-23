import React from "react";
import {Route, Switch} from "react-router-dom";

//import containers
import MainPage from "./mainpage/mainpage_container";
import SessionForm from "./session_form/session_form_container";
import ServerPage from "./server_page/server_page_container";
import MePage from "./me_page/me_page";
import {AuthRoute, ProtectedRoute} from "../util/route_util";
import Modal from "./modal/modal";


const App = () => {
    return (
        <div className="mainView">
            <Modal />
            <Switch>
                <AuthRoute path="/register" component={SessionForm}/>
                <AuthRoute path="/login" component={SessionForm}/>
                <ProtectedRoute path="/channels" component={ServerPage}/>
                <ProtectedRoute path="/me" component={MePage}/>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;