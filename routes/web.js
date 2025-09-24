import { render } from "ejs"
import express from "express"

const web = express.Router()

web.get('/:username/', (req, res) => {
    const username = req.params.username;
    res.render ('public-profile', {
        title : username,
        username : username,
        bio : "Hiduplah Seperti Denis Adit Tolongin Ditt.."
    })
})

export default web