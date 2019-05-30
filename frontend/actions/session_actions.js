import * as APIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signUp = user => dispatch => {
    return(
        APIUtil.signUp(user)
            .then(user => dispatch(receiveUser(user)),
                 errors => dispatch(receiveErrors(errors)))
    );
};

export const logIn = user => dispatch => {
    debugger
    return(
        APIUtil.logIn(user)
            .then(user => {
                dispatch(receiveUser(user));},
                 errors=> dispatch(receiveErrors(errors)))
    );
};

export const logOut = () => dispatch => {
    debugger
    return(
        APIUtil.logOut().then(() => dispatch(logoutUser()))
    );
};



const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    });
};

const logoutUser = () => {
    return ({
        type: LOGOUT_USER,
    });
};

const receiveErrors = errors => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    });
};