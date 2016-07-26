// 1. "/" => Home
// 2. "/123" => 123!, "/456" => 456!
// => simple web application 을 만들어보자.

// 여러 기능들을 모듈화 할것임

var http = require("http");
var logger = require("./logger");
var homeRouter = require("./router").home;
var aboutRouter = require("./router").about;
var roomRouter = require("./router").room;

var app = http.createServer(function(request, response) {
    // Log 를 남기자!
    logger(request); 

    // 1. Home
    homeRouter(request, response);
    // 2. About
    aboutRouter(request, response);
    // 3. Room
    roomRouter(request, response);

});

app.listen(3000, function() {
    console.log("Server is running!");
});

