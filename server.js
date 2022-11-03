var createError = require("http-errors");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
var cors = require("cors");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var { expressjwt: jwt } = require("express-jwt");
const config = require("./config");
let { userRouter, tdaDataRouter, altDataRouter, mlDataRouter, setup } = require("./routes/index");

/* Parsing the body of the request. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());

/* This is a middleware that checks if the request has a valid token. If it does not, it will return a
401 error. */
app.use(
    jwt({
        secret: config.Secret,
        algorithms: ["HS256"],
        credentialsRequired: true,
    }).unless({
        path: ["/api/setup/status", "/api/user/register", "/api/user/login", "/api/user/account"]
    })
);

app.use("/api/user", userRouter);
app.use("/api/altdata", altDataRouter);
app.use("/api/tdadata", tdaDataRouter);
app.use("/api/mldata", mlDataRouter);
app.use("/api/setup", setup);

app.use(function (req, res, next) {
    next(createError(404));
});

/* This is a middleware that checks if the request has a valid token. If it does not, it will return a
401 error. */
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send({ code: -1, msg: "Invalid token." });
    } else {
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};
        res.status(err.status || 500);
        res.render("error");
    }
});

app.listen(3000, function () {
    console.log("Listening on port 3000 now.");
});