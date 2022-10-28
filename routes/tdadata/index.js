// routes/altdata.js

let express = require("express");
let tdaDataRouter = express.Router();
let jwt = require("jsonwebtoken");
let config = require("../../config");
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

// Options controller
tdaDataRouter.post("/options", async function (req, res) {
    api.Options.options(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    tdaDataRouter,
};
