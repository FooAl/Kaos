export const fetchChannels = serverID => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${serverID}/channels`,
    });
};

export const fetchChannel = (serverID, channelID) => {
    return $.ajax({
        method: "GET",
        url: `api/servers/${serverID}/channels/${channelID}`
    });
};

export const deleteChannel = (channelID) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/servers/${channelID}`,
    });
};

export const createChannel = channel => {
    return $.ajax({
        method: "POST",
        url: `/api/servers/${channel.server_id}/channels`,
        data: {channel},
    });
};
