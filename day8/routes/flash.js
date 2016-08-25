var express = require("express");
var router = express.Router();


router.get("/", function(request, response) {
    request.flash("success", "회원가입을 성공했습니다.");
    request.flash("node.js", "is awesome");

    return response.redirect("/flash/result/");
});


router.get("/result/", function(request, response) {
    return response.json(request.flash());
});


module.exports = router;
