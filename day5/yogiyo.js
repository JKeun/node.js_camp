// 기존 방식
// var http = require("http");

// var requestOptions = {
//     hostname: "yogiyo.co.kr",
//     path: "/api/vi/geo-re-....",
//     headers: {
//         "X-APIKey": "___",
//         "X-APISecret": "___"
//     };
// };


var request = require("request");

var options = {
    url: "https://www.yogiyo.co.kr/api/v1/restaurants-geo/?items=20&order=rank&page=0&search=&zip_code=135080",
    headers: {
        "X-ApiKey": "iphoneap",
        "X-ApiSecret": "fe5183cc3dea12bd0ce299cf110a75a2"
    }
};

request(options, function(error, response, body) {
    console.log(JSON.parse(body));
});


// JWT ( JSON Web Token )

// login api (username, password ) ===> JWT ...
// 그다음 요청부터는 모든 header에 JWT ...
