// Watcha News ( request ... ) => 지난번이랑 100% 동일하게 만들고 시작
// GET 요청을 통한 검색기능 구현
// 영화 뉴스 정보가 보이는 watchaRouter ("/watcha/") 만들기!
// https://watcha.net/home/news.json?page=1&per=5
var express = require("express");
var router = express.Router();

var httpRequest = require("request");
// $ npm install --save request

router.get("/", function(request, response) {
    var query = request.query.query;  // 우리가 입력한 검색어

    var url = "https://watcha.net/home/news.json?page=1&per=20";
    httpRequest(
        url,
        function(error, httpResponse, body) {
            var data = JSON.parse(body);
            var newsItems = data.news;

            if (query) {
                // 새로운 newsItems 를 만들자.
                var matchedNewsItems = [];
                newsItems.forEach(function(newsItem) {
                    if (newsItem.title.indexOf(query) > -1) {
                        matchedNewsItems.push(newsItem);
                    }
                });
                newsItems = matchedNewsItems;
            }

            var context = {
                newsItems: newsItems,
                query: query
            };

            return response.render("watcha", context);
        }    
    );
});



module.exports = router;
