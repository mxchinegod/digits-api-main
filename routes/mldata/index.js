// routes/mldata.js

let express = require("express");
let mlDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const { UserModel } = require("../../models/index");
const moment = require("moment");

const api = require('./api')

mlDataRouter.post("/bart_cnn", async function (req, res) {
    /* Calling the bart_cnn function in the api.js file. */
    api.SummarizeAPI.bart_cnn(req.body.query).then((data) => {
        res.json(new SuccessModel(data));
    })
});

mlDataRouter.post("/autodd", async function (req, res) {
    api.AutoDDAPI.autodd().then((data) => {
        res.json(new SuccessModel(data));
    })
});

mlDataRouter.post("/greeks", async function (req, res) {
    api.GreeksAPI.greeks(req.body.query).then((data) => {
        res.json(new SuccessModel(data));
    })
});

mlDataRouter.post("/agi", async function (req, res) {
    if (!req.body.insert.quota.type=='Oracle'&&!req.body.insert.quota.date) {
        res.json(new ErrorModel(data={message:"You have run out of Oracle quota for the month!"},"modificationFailed"));
    }
    let nModified = await UserModel.findOneAndUpdate(
        { "email": req.auth.email },
        { $push: req.body.insert },
        { new: true }
    );
    if (nModified) {
        api.AGIAPI.oracle(req.body.query).then((response) => {
            var data = {}
            data.quota = nModified.quota
            if (
                data.quota.filter((item) => {
                    return (
                        item.type == 'Oracle' &&
                        moment(item.date).format('YYYY-MM') == moment().format('YYYY-MM')
                    );
                }).length >= 100
            ) {
                res.json(new ErrorModel(data={message:"You have run out of Oracle quota for the month!"},"modificationFailed"));
            } else {
                data.answer = response.answer
                res.json(new SuccessModel(data, "modificationSucceeded"));
            }
        })
    } else {
        res.json(new ErrorModel("modificationFailed"));
    }

});

mlDataRouter.post("/pdfSentiment", async function (req, res) {
    api.PDFSentimentAPI.process(req.body.query).then((data) => {
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    mlDataRouter,
};
