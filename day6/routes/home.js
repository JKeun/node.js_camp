var express = require("express");
var router = express.Router();


// app... HTTP Method "GET"
router.get("/", function(request, response) { // 의미: "/" URL 에 GET 요청이 들어오면
                                           // callback 함수를 실행
    return response.render("home");
    // send => write + end

    // base.pug ( layout: title ) => extends, block ___ ( block "content" )
    // partials/header.pug, footer.pug => include
});
module.exports = router;
