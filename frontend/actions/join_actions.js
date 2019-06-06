import * as APIUtil from "../util/join_api_util";

export const RECEIVE_JOINS = "RECEIVE_JOINS";
export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const DESTROY_JOIN = "DESTROY_JOIN";

export const createLink = link => dispatch => {
    return (
        APIUtil.createLink(link).then(link => dispatch(receiveJoin(link)))
    );
};

export const deleteLink = linkID => dispatch => {
    return (
        APIUtil.deleteLink(linkID).then(linkID => dispatch(destroyJoin(linkID)))
    );
};

export const fetchLinks = serverID => dispatch => {
    return(
        APIUtil.fetchLinks(serverID).then(serverID => dispatch(receiveJoins(serverID)))
    );
};

const receiveJoins = links => {
    return ({
        type: RECEIVE_JOINS,
        links
    });
};

const receiveJoin = link => {
    return ({
        type: RECEIVE_JOIN,
        link
    });
};

const destroyJoin = linkID => {
    return ({
        type: DESTROY_JOIN,
        linkID
    });
};