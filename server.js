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

// use post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// processCrossDomain
app.use(cors());

// journal
app.use(logger("dev"));

// use cookie
app.use(cookieParser());

// 校验 token，获取 headers ⾥里里的 Authorization 的 token，要写在路由加载之前，静态资源之后
app.use(
    jwt({
        secret: config.Secret,
        algorithms: ["HS256"],
        credentialsRequired: true,
    }).unless({
        path: ["/api/setup/status", "/api/user/register", "/api/user/login", "/api/user/account"], // ⽩白名单，除了了这⾥里里写的地址，其他的 URL 都需要验证
    })
);

app.use("/api/user", userRouter);
app.use("/api/altdata", altDataRouter);
app.use("/api/tdadata", tdaDataRouter);
app.use("/api/mldata", mlDataRouter);

app.use("/api/setup", setup);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        // thisNeedsToBeHandledAccordingToOurOwnBusinessLogic
        res.status(401).send({ code: -1, msg: "Invalid token." });
    } else {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render("error");
    }
});

app.listen(3000, function () {
    console.log("Listening on port 3000 now.");
});