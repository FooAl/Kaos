export const fetchLinks = serverID => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${serverID}/user_server_links`
    });
};


export const createLink = (link) => {
    return $.ajax({
        method: "POST",
        url: `/api/user_server_links`,
        data: {link},
    });
};

export const deleteLink = linkID => {
    return $.ajax({
        method: "DELETE",
        url: `/api/user_server_links/${linkID}`
        });
};