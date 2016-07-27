// Node.js => 방대한 패키지 생태계 ++++
// www.npmjs.com // express >> module: request
// npm (node package manager ): 모듈을 다운받기 위한 매니저
// npm install ____ ( npm install request )
// node_modules/ 라는 폴더에 다운로드

var request = require("request");

var url = "http://api.zigbang.com/v1/items?detail=true&item_ids=5287715";

request(url, function(error, response, body) {
    console.log(JSON.parse(body));
});
