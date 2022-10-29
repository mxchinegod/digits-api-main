// routes/tdadata.js

let express = require("express");
let tdaDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

// Options controller
tdaDataRouter.post("/options", async function (req, res) {
    api.Options.options(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

// Volatility controller
tdaDataRouter.post("/volatility", async function (req, res) {
    api.Volatility.volatility(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    tdaDataRouter,
};
