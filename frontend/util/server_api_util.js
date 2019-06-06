export const fetchServers = sessionID => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/`,
        data: {sessionID}
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
        url: `/api/channels/${serverID}`,
    });
};

export const createServer = server => {
    return $.ajax({
        method: "POST",
        url: `/api/servers/${server.id}`,
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