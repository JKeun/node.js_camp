// 이 라우터를 
// 하나의 미들웨어 형태로 만들어서
// ====> express 에서 불러다 쓸 수 있도록 하자.

var path = require("path");

var express = require("express");
var router = express.Router();

var httpRequest = require("request");

var csv = require("./csv");

router.get("/", function(request, response) {
    return response.render("Home", {});
});

router.get("/about/", function(request, response) {
    return response.render("About");
});

router.get("/rooms/:roomId/", function(request, response) {
    var roomId = request.params.roomId;
    
    var url = "http://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId;

    httpRequest(url, function(error, httpResponse, body) {
        var data = JSON.parse(body);
        return response.send(data);
    });
});

router.get("/watcha/", function(request, response) {
    // 왓챠 영화 뉴스 정보가 API 형태로 뜨도록
    var url = "https://watcha.net/home/news.json?page=1&per=20";
    httpRequest(
        url,
        function(error, httpResponse, body) {
            var data = JSON.parse(body);
            // return response.send(data);
            
            return response.render("watcha", {newsItems: data["news"]});
        }
    );
});

router.get("/api/:filename/", function(request, response) {
    var filename = request.params.filename;
    var filePath = path.join(__dirname, "csv", filename + ".csv");
    // /api/stud.ets/ ===> "./csv/students.csv";
    var data = csv(filePath);
    return response.json(data);
});


module.exports = router;
