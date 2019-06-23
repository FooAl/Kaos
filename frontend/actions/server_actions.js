import * as APIUtil from "../util/server_api_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const DESTROY_SERVER = "DESTROY_SERVER";
export const CLEAR_SERVERS = "CLEAR_SERVERS";

export const fetchServers = (sessionID, isPublic) => dispatch => {
    return (
        APIUtil.fetchServers(sessionID, isPublic).then(servers => dispatch(receiveServers(servers)))
    );
};

export const fetchServer = serverID => dispatch => {
    return (
        APIUtil.fetchServer(serverID).then(server => dispatch(receiveServer(server)))
    );
};

export const createServer = server => dispatch => {
    return (
        APIUtil.createServer(server).then(server => dispatch(receiveServer(server)))
    );
};

export const deleteServer = serverID => dispatch => {
    return (
        APIUtil.deleteServer(serverID).then(() => dispatch(destroyServer()))
    );
};

export const editServer = channel => dispatch => {
    return (
        APIUtil.editServer(channel).then(server => dispatch(receiveServer(server)))
    );
}

const receiveServers = servers => {
    return ({
        type: RECEIVE_SERVERS,
        servers
    });
};

const receiveServer = server => {
    return ({
        type: RECEIVE_SERVER,
        server
    });
};;

const destroyServer = serverID => {
    return ({
        type: DESTROY_SERVER,
        serverID
    });
};

export const clearServers = () => {
    return({
        type: CLEAR_SERVERS
    });
};