// routes/mldata.js

let express = require("express");
let mlDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

// Long content summary controller
mlDataRouter.post("/bart_cnn", async function (req, res) {
    api.SummarizeAPI.bart_cnn(req.body.query).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    mlDataRouter,
};
