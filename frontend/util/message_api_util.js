export const fetchMessages = channelID => {
    return $.ajax({
        method: "GET",
        url: `/api/channels/${channelID}/messages`,
    });
};