// models/index.js

const mongoose = require("mongoose");
const config = require("../config");
const { UserSchema } = require("./user");
// 注册
let connection = mongoose.createConnection(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// 连接数据库
const UserModel = connection.model("User", UserSchema);
module.exports = {
    UserModel,
};
