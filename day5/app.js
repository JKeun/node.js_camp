// npm install -g nodemon ( g ==> global )
// nodemon app.js   # 앱 실행
// npm install --save express

var express = require("express");

var app = express();

// if request.url === "/"
app.get("/", function(request, response) {
    return response.send("hello world");
});

app.listen(3000, function() {
    console.log("Server is running!");
});
