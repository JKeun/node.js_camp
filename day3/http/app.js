var http = require("http");
var path = require("path");
var fs = require("fs");


// requestlistener 라고 불리는
// => "request" 라는 이벤트가 발생했을 때 동작하는 콜백 함수
var app = http.createServer(function(request, response) {
    if (request.url === "/") {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("<h1>Home</h1>");
        response.end();
    }

    if (request.url === "/about/") {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("<h2>about</h2>");
        response.end();
    }

    if (request.url === "/json/") {
        response.writeHead(200, {
            "Content-Type": "application/json"
        });
        var data = {
            "name": "jkpark",
            "email": "jkpark@fastcampus.co.kr"
        };
        response.write(JSON.stringify(data));
        response.end();
    }

    // 만약 요청이 "/students/" => students.csv 파일을 읽어
    // => json 형태로 뿌려주는 API

    if (request.url === "/students/") {
        fs.readFile(path.join(__dirname, "../data/students.csv"),
            {encoding: "utf8"},
            function(error, data) {
                if (error) { throw error; }
                var students = [];
                var rows = data.split("\n");

                for (var rowIndex=0; rowIndex<rows.length-1; rowIndex++) {
                    var row = rows[rowIndex];
                    var columns = row.split(",");

                    if (rowIndex === 0) {
                        var headers = columns;
                        var headersCount = headers.length;
                    } else {
                        var student = {};
                        for (var headerIndex=0; headerIndex<headersCount; headerIndex++) {
                            student[headers[headerIndex]] = columns[headerIndex];
                        }
                        students.push(student);
                    }
                } 

                response.writeHead(200, {
                    "Content-Type": "application/json"
                });
                response.write(JSON.stringify(students));
                response.end(); 
        });
    }
});

app.listen(3000, function() {
    console.log("Server is running!");
});
