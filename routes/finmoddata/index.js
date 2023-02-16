// routes/tdadata.js

let express = require("express");
let finModRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

/* A POST request to the /historical route. It is using the stock function from the api.Historical
object. It is passing the req.body as the parameter to the stock function. It is then returning the
data as a json object. */
finModRouter.post("/historicalPrices", async function (req, res) {
    api.FinMod.historicalPrices(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/secFiling", async function (req, res) {
    api.FinMod.secFiling(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/financialGrowth", async function (req, res) {
    api.FinMod.financialGrowth(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/financialRatios", async function (req, res) {
    api.FinMod.financialRatios(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/dcf", async function (req, res) {
    api.FinMod.dcf(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/erTranscript", async function (req, res) {
    api.FinMod.erTranscript(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

finModRouter.post("/senateDisclosure", async function (req, res) {
    api.FinMod.senateDisclosure(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    finModRouter,
};
