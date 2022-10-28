// routes/altdata.js

let express = require("express");
let altDataRouter = express.Router();
let jwt = require("jsonwebtoken");
let config = require("../../config");
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

// Dark Pool controller
altDataRouter.get("/darkpool", async function (req, res) {
    api.DarkPool.spCompare().then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    altDataRouter,
};
