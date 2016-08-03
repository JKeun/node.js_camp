// Home => html Home

// 1. express 설치 ( package.json 의존성 관리 )
// 2. express app
// 3. template engine => pug "view engine", "views"
// .pug => render

// Log 를 기록하는 "logger" Middleware
// ===> morgan

// app.js ( + router.js )
var path = require("path");
var express = require("express");

var bodyParser = require("body-parser");
var morgan = require("morgan");

var homeRouter = require("./routes/home");
var httpRouter = require("./routes/http");
var watchaRouter = require("./routes/watcha");
var usersRouter = require("./routes/users");

// var home = ...
// var homeRouter = ... ( 가능하면 이렇게 명시적인 방법 사용 )

var app = express();


// application settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware settings ( 3rd Party Packages )
app.use(bodyParser.json());  // POST request.body ( body-parser )
app.use(bodyParser.urlencoded({entended: true}));

app.use(morgan("combined"));  // logger Middleware ( morgan )

// Middleware settings
app.use("/", homeRouter);
app.use("/http/", httpRouter);
app.use("/watcha/", watchaRouter);
app.use("/users/", usersRouter);


app.listen(3000, function() {
    console.log("Server is running");
});
