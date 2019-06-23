export const validUser = username => {
    return $.ajax({
        method: "GET",
        url: "api/users",
        data: {username},
    })
}