var http = require("http");
// var path = require("path");
// var fs = require("fs");
var render = require("./renderer");

// 1. Home Router
module.exports.home = function(request, response) {  
    if (request.url === "/") {
        // response.write("<h1>Home!</h1>");  // templates/home.html 을 읽어서 뿌려주기
                                           // fs.readFile ( 비동기적 ), fs.readFileSync ( 동기적 )
        
        // 1. 비동기적인 방식
        // var filePath = path.join(__dirname, "templates", "home.html");
        // fs.readFile(filePath, {encoding: "utf8"}, function(error, data) {
        //     response.write(data);
        //     response.end();
        // });

        // 2. 동기적인 방식
        // var filePath = path.join(__dirname, "templates", "home.html");
        // var content = fs.readFileSync(filePath, {encoding:"utf8"});
        // response.write(content);
        // response.end();
        
        // renderer ( HTML 을 관리하는 모듈 )
        render(response, "home", {}); 
    }
};

// 2. About Router
module.exports.about = function(request, response) {
    if (request.url === "/about/") {
        // response.write("About");
        // return response.end();
        render(response, "about", {});
    }
};

// 3. Room Router
module.exports.room = function(request, response) {
    var roomId = request.url.replace("/", "").replace("/", "");

    if (roomId !== "about" && roomId.length > 0) {
        // http get ..
        var url = "http://api.zigbang.com/v1/items?detail=true&item_ids=" + roomId;
        
        http.get(url, function(apiResponse) {
            var data = "";

            apiResponse.on("data", function(chunk) {
                data += chunk;
            });

            apiResponse.on("end", function() {
                var zigbangData = JSON.parse(data);
                
                    try {
                        var zigbangItem = zigbangData["items"][0]["item"];

                        var deposit = zigbangItem["deposit"];
                        var rent = zigbangItem["rent"];
                        var address = zigbangItem["agent_address1"];
                        var imageUrl = zigbangItem["profile_url"];

                        var context = {
                            deposit: deposit,
                            rent: rent,
                            address: address,
                            imageUrl: imageUrl
                        };
                        render(response, "room", context);
                    } catch (error) {
                        var contexrt = {
                            error:error
                        };
                        render(response, "error", {error: error});
                    }
            });
        });
    }
};
