import React from "react";
import {Provider} from "react-redux";
import {Route, Redirect, Switch, Link, HashRouter} from "react-router-dom";

//import containers
import MainPage from "./mainpage/mainpage";

const App = () => {
    return (
        <div className="mainView">
            <Switch>
                {/* sign up */}
                {/* log in */}
                {/* logged in */}
                <Route path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;