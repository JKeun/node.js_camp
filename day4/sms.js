var http = require("http");
var querystring = require("querystring");


module.exports = function(sender, receiver, content) {
    console.log(sender + "가 " + receiver + "에게 [" + content + "] 를 발송합니다.");
    
    var postData = querystring.stringify({
        send_phone: sender,
        dest_phone: receiver,
        msg_body: content
    });  // POST 로 넘길 data 를 정의해주는 부분 ( GET 방식 URL 에 이미 정보가 포함 )

    var requestOptions = {
        hostname: "api.openapi.io",
        path: "/ppurio/1/message/sms/dobestan/",
        
        method: "POST",  // HTTP Method 명시적 기입
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": postData.length,
            "x-waple-authorization": "MTkyMC0xNDEzODU0NTAwMzU3LTllM2VkOTM3LTYwMTEtNGU2Zi1iZWQ5LTM3NjAxMTNlNmYyMg=="
        }   // Header 정보 명시적 기입
    };
    
    var request = http.request(
        requestOptions,
        function(response) {
            var data = ""

            response.on("data", function(chunk) {
                data += chunk;
            });

            response.on("end", function() {
                console.log(JSON.parse(data));
            });
        }        
    );

    request.on("error", function(error) {
        console.log(error);
    });

    request.write(postData);  //POST 데이터를 전송하는 부분
    request.end();
};

