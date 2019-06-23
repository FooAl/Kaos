import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchUser = user => {
    return dispatch(receiveUser(user));
};

export const validUser = user => dispatch => {
    return (
        APIUtil.validUser(user)
            .then(user => dispatch(receiveUser(user)),
                errors => dispatch(receiveErrors(errors)))
    );
}

const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    });
};

const receiveErrors = errors => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    });
};