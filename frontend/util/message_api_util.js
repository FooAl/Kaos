export const fetchMessages = channelID => {
    debugger
    return $.ajax({
        method: "GET",
        url: `/api/channels/${channelID}/messages`,
    });
};