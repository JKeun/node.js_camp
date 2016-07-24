var http = require("http");

// Server 를 만들기 위한 모듈이 아니라, - createServer
// 기본적으로는  HTTP Requrest, Response 를 처리하기 위한 모듈.

function zigbang(zigbangItemId) {
    var zigbangAPIUrl = "http://api.zigbang.com/v1/items?detail=true&item_ids=" + zigbangItemId;

    http.get(
        zigbangAPIUrl,
        function(response) {  // response => url 에 요청한 response 데이터
            var data = "";

            response.on("data", function(chunk) {
               data += chunk;
            });

            response.on("end", function() {
                var zigbangData = JSON.parse(data); // String => JSON
                // zigbangData[items] 이걸 바탕으로 => deposit, rent, address
                
                try {
                    var zigbangItems = zigbangData["items"][0]["item"];

                    var deposit = zigbangItems["deposit"];
                    var rent = zigbangItems["rent"];
                    var address = zigbangItems["address1"];

                    var zigbangResult = {
                        deposit: deposit,
                        rent: rent,
                        address: address
                };
                console.log(zigbangResult);
                } catch (error) {
                    console.log("해당하는 매물의 정보가 없습니다.");
                }
            });
        }
    );    
};

// zigbang("346");
// node app.js 123 345 3440906 콘솔에서 치면 실행되게
var zigbangItemIds = process.argv.slice(2);

//zigbangItemIds.forEach(function(zigbangItemId) {
//    zigbang(zigbangItemId);
//});
zigbangItemIds.forEach(zigbang);

