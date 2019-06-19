export const fetchServerUsers = serverID => {
    return $.ajax({
        method: "GET",
        url: "/api/users",
        data: {serverID},
    });
};