var express = require("express");
var router = express.Router();

// url 주소를 통해서 정보를 전달 => GET 방식
// url?key1=value1&key2=value2&...
router.get("/", function(request, response) {

    // ..?key1=value1&key2=value2 ....
    // 처음 시작은 "?" 그 다음부터는 "&"
    var data = request.query;
    return response.send(data);
});


// post 요청으로 온 데이터는 => body-parser 패키지 사용
router.post("/", function(request, response) {
    var data = request.body;
    return response.send(data);
});

    // 1. GET => request.query
    // 2. POST, PATCH, PUT, DELETE ... => request.body ( body-parser )

module.exports = router;
