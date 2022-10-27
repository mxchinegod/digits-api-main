// routes/user.js

let express = require("express");
let userRouter = express.Router();
const { UserModel } = require("../models/index");
let jwt = require("jsonwebtoken");
let config = require("../config");
const { SuccessModel, ErrorModel } = require("../utils/resModule");

// userRegistrationInterface
userRouter.post("/user/register", async function (req, res) {
    await UserModel.create(req.body);
    res.json(new SuccessModel("loginWasSuccessful"));
});

// loginInterface
userRouter.post("/user/login", async function (req, res) {
    let { username, password } = req.body;
    let query = { username, password };
    try {
        let result = await UserModel.findOne(query);
        let resultJSON = result.toJSON();
        let token = jwt.sign(resultJSON, config.Secret, { expiresIn: config.EXPIRES });
        res.json(new SuccessModel(token));
    } catch (error) {
        res.json(new ErrorModel("loginFailed"));
    }
});

// queryTheCurrentUserInformationInterface
userRouter.get("/user/currentUser", async function (req, res) {
    let authorization = req.headers["authorization"];
    let token = authorization.split(" ")[1];
    let result = jwt.verify(token, config.Secret);
    res.json(new SuccessModel(result, "loginWasSuccessful"));
});

// queryAllUserInformation
userRouter.get("/user/account", async function (req, res) {
    try {
        let result = await UserModel.find();
        res.json(new SuccessModel(result, "queryWasSuccessful"));
    } catch (error) {
        res.json(new ErrorModel(error));
    }
});

// deleteUserInformation
userRouter.delete("/user/account", async function (req, res) {
    let hasRes = await UserModel.findOne(req.body);
    if (hasRes) {
        let { deletedCount } = await UserModel.remove(req.body);
        if (deletedCount) {
            res.json(new SuccessModel("deletionSucceeded"));
        }
    } else {
        res.json(new ErrorModel("deleteFailed"));
    }
});

// modifyUserInformation
userRouter.put("/user/account", async function (req, res) {
    let { nModified } = await UserModel.update(
        req.query,
        { $set: req.body },
        { multi: true }
    );
    if (nModified) {
        res.json(new SuccessModel("modificationSucceeded"));
    } else {
        res.json(new ErrorModel("modificationFailed"));
    }
});

module.exports = {
    userRouter,
};
