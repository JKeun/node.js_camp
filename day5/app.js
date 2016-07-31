// npm install -g nodemon ( g ==> global )
// nodemon app.js   # 앱 실행
// npm install --save express
var path = require("path");
var express = require("express");

var app = express();

var router = require("./router");

// 0. Application Settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MiddleWare

// 1. "Logger" 라고 부르는 미들웨어 함수가 받아서,
// 요청된 주소를 출력 => 그 다음 콜백함수를 실행( next )
app.use(function(request, response, next) {
    // Log 를 출력해주는 미들웨어
    console.log("Requested on: " + request.url);
    next();  // 그 다음 미들웨어를 실행시켜주는 함수
});

app.use("/", router);


app.listen(3000, function() {
    console.log("Server is running!");
});
