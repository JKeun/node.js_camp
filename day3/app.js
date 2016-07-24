// node의 모듈을 require로 불러옴 
// nodejs.org에 docs있음
// 향후에는 이방법 안씀(비효율) => 
// 1. Router ( URL )
// 2. Renderer
// 이를 직접 구현해보고 => Express에서 구현된 것을 쓸 예정

var http = require("http");  // 1번쨰로 실행

var app = http.createServer(function(request, response) {
    response.write("hello world");
    response.end();
});  // 얘는 사실 아무것도 아님(실행X), 
     // 웹에서 새로고침을 할 때 function(request, response)가 실행
     //  => 이벤트가 발생했을때만 작동하는 함수 
     //  => 콜백 함수

app.listen(3000, function() {
    console.log("Server is running!");
});  // 얘가 먼저 실행됨
