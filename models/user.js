// model/user.js

let mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* This is creating a new schema for the user model. */
let UserSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    access: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

module.exports = {
    UserSchema
};
