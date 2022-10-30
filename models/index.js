// models/index.js

const mongoose = require("mongoose");
const config = require("../config");
const { UserSchema } = require("./user");

/* Creating a connection to the database. */
let connection = mongoose.createConnection(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserModel = connection.model("User", UserSchema);
module.exports = {
    UserModel,
};
