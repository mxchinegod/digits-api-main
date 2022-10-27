// model/user.js

let mongoose = require("mongoose");
const Schema = mongoose.Schema;
// 定义数据结构
let UserSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    access: { type: String },
});
module.exports = {
    UserSchema
};
