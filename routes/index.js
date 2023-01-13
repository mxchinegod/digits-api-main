const { userRouter } = require("./user");
const { altDataRouter } = require("./altdata/index");
const { tdaDataRouter } = require("./tdadata/index");
const { mlDataRouter } = require("./mldata/index");

let express = require("express");
let setup = express.Router();
const { SuccessModel, ErrorModel } = require("../utils/resModule");

/* This is a route that is used to check if the server is running. */
setup.get('/status', async function (req, res) {
    res.json(new SuccessModel());
});

module.exports = {
    userRouter,
    altDataRouter,
    tdaDataRouter,
    mlDataRouter,
    setup
};