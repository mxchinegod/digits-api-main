// routes/tdadata.js

let express = require("express");
let finModRouter = express.Router();
const { SuccessModel, ErrorModel } = require("../../utils/resModule");
const api = require('./api')

/* A POST request to the /historical route. It is using the stock function from the api.Historical
object. It is passing the req.body as the parameter to the stock function. It is then returning the
data as a json object. */
finModRouter.post("/historical", async function (req, res) {
    api.Historical.stock(req.body).then((data)=>{
        res.json(new SuccessModel(data));
    })
});

module.exports = {
    finModRouter,
};
