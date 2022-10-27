var createError = require("http-errors");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
var cors = require("cors");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var { expressjwt: jwt } = require("express-jwt");
const config = require("./config");
let { userRouter } = require("./routes/index");

// 处理 post 请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 打印日志
app.use(logger("dev"));
// 处理跨域
app.use(cors());

// 日志
app.use(logger("dev"));

// 使用 cookie
app.use(cookieParser());

// 校验 token，获取 headers ⾥里里的 Authorization 的 token，要写在路由加载之前，静态资源之后
app.use(
    jwt({
        secret: config.Secret,
        algorithms: ["HS256"],
        credentialsRequired: true,
    }).unless({
        path: ["/api/user/register", "/api/login", "/api/user/account"], // ⽩白名单，除了了这⾥里里写的地址，其他的 URL 都需要验证
    })
);

app.use("/api", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        // 这个需要根据⾃自⼰己的业务逻辑来处理理
        res.status(401).send({ code: -1, msg: "token 验证失败" });
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