export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = user => {
    return dispatch(receiveUser(user));
};

const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    });
};