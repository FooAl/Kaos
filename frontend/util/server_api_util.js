export const fetchServers = (sessionID, public) => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/`,
        data: {sessionID, public}
    });
};

export const fetchServer = serverID => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${serverID}`
    });
};

export const deleteServer = (serverID) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/servers/${serverID}`,
    });
};

export const createServer = server => {
    return $.ajax({
        method: "POST",
        url: `/api/servers`,
        data: { server },
    });
};


export const editServer = server => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${server.id}/edit`,
        data: { server },
    })
}