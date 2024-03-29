// routes/altdata.js

let express = require("express");
let altDataRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

altDataRouter.get("/darkpool", async function (req, res) {
    /* This is a promise. It is waiting for the data to be returned from the DarkPool API. Once the
    data is returned, it is then sent back to the client. */
    api.DarkPool.spCompare().then((data)=>{
        res.json(new SuccessModel(data));
    })
});

altDataRouter.post("/news", async function (req, res) {
    /* This is a POST request to the route /news. It is using the NewsAPI to get the data and then
    sending it back to the client. */
    api.NewsAPI.everything(req.body.query).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

altDataRouter.get("/reserve/schedule", async function (req, res) {
    /* This is a POST request to the route /reserve. It is using the ReserveAPI to get the data and then
    sending it back to the client. */
    api.ReserveAPI.schedule().then((data)=>{
        res.json(new SuccessModel(data));
    })
});

altDataRouter.get("/leaks/quarterly", async function (req, res) {
    /* This is a POST request to the route /reserve. It is using the ReserveAPI to get the data and then
    sending it back to the client. */
    api.LeaksAPI.quarterly().then((data)=>{
        res.json(new SuccessModel(data));
    })
});


module.exports = {
    altDataRouter,
};
