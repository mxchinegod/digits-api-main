// routes/user.js

let express = require("express");
let userRouter = express.Router();
const { UserModel } = require("../models/index");
let jwt = require("jsonwebtoken");
let config = require("../config");
const { SuccessModel, ErrorModel } = require("../utils/resModule");

// 用户注册接口
userRouter.post("/user/register", async function (req, res) {
    await UserModel.create(req.body);
    res.json(new SuccessModel("注册成功"));
});

// 登录接口
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

// 查询当前用户信息接口
userRouter.get("/user/currentUser", async function (req, res) {
    let authorization = req.headers["authorization"];
    let token = authorization.split(" ")[1];
    let result = jwt.verify(token, config.Secret);
    res.json(new SuccessModel(result, "loginWasSuccessful"));
});

// 查询所有用户信息
userRouter.get("/user/account", async function (req, res) {
    try {
        let result = await UserModel.find();
        res.json(new SuccessModel(result, "queryWasSuccessful"));
    } catch (error) {
        res.json(new ErrorModel(error));
    }
});

// 删除用户信息
userRouter.delete("/user/account", async function (req, res) {
    let hasRes = await UserModel.findOne(req.body);
    if (hasRes) {
        let { deletedCount } = await UserModel.remove(req.body);
        if (deletedCount) {
            res.json(new SuccessModel("删除成功"));
        }
    } else {
        res.json(new ErrorModel("删除失败"));
    }
});

// 修改用户信息
userRouter.put("/user/account", async function (req, res) {
    let { nModified } = await UserModel.update(
        req.query,
        { $set: req.body },
        { multi: true }
    );
    if (nModified) {
        res.json(new SuccessModel("修改成功"));
    } else {
        res.json(new ErrorModel("修改失败"));
    }
});

module.exports = {
    userRouter,
};
