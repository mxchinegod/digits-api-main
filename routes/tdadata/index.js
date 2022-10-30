// routes/tdadata.js

let express = require("express");
let tdaDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

tdaDataRouter.post("/options", async function (req, res) {
    /* Calling the api.Options.options function and passing in the req.body. */
    api.Options.options(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

tdaDataRouter.post("/volatility", async function (req, res) {
    /* Calling the api.Volatility.volatility function and passing in the req.body. */
    api.Volatility.volatility(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    tdaDataRouter,
};
