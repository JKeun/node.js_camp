var http = require("http");

var url = "http://api.zigbang.com/v1/items?detail=true&item_ids=5287715";

// http.get(url. function(response) {..}); => 기존 방식
// http.request => 우리가 사용할 방식 ( GET, POST 와 무관하게 가능 )

// var request = http.request(옵션, response를 갖는 callback)

var requestOptions = {
    hostname: "api.zigbang.com",
    path: "/v1/items?detail=true&item_ids=5287715"
};

var request = http.request(
    requestOptions,
    function(response) {
        var data = "";

        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            console.log(JSON.parse(data));
        });
    }
);

// 1. Error Handling.
request.on("error", function(error) {
    console.log(error);
});

// 2. Request 가 끝나는 것을 명시하기.
request.end();









