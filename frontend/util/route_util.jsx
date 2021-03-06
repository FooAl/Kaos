import React from "react";
import {connect} from "react-redux";
import {Route, Redirect, withRouter} from "react-router-dom";

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) :
        (
            <Redirect to="/me" />
        )
    )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    )} />
);

const mSP = state => (
    {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mSP)(Auth));

export const ProtectedRoute = withRouter(connect(mSP)(Protected));