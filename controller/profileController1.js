export const publicProfile1 = (req, res) => {
    const username = req.params.username;

    res.render ('public-profile1', {
        title : username,
        username : username,
        bio : "Hiduplah Seperti Denis Adit Tolongin Ditt.."
    })
}