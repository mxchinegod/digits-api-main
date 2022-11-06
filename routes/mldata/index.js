// routes/mldata.js

let express = require("express");
let mlDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

mlDataRouter.post("/bart_cnn", async function (req, res) {
    /* Calling the bart_cnn function in the api.js file. */
    api.SummarizeAPI.bart_cnn(req.body.query).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

mlDataRouter.post("/autodd", async function (req, res) {
    api.AutoDDAPI.autodd().then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    mlDataRouter,
};
