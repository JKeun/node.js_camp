var express = require("express");
var router = express.Router();

var User = require("../models/user");


router.get("/login/", function(request, response) {
    // login form rendering
    return response.render("auth/login");
});


router.post("/login/", function(request, response, next) {
    // login processing
    var username = request.body.username;
    var password = request.body.password;

    User.authenticate(username, password, function(error, user) {
        if (error) return next(error);

        if (user) {
            console.log("User 로그인 성공!!");
            request.session.user = user;
            return response.redirect("/");
        }
    });
});


router.get("/signup/", function(request, response) {
    // signup form rendering
    return response.render("auth/signup");
});


router.post("/signup/", function(request, response) {
    // signup processing
    var user = new User({
        username: request.body.username,
        email: request.body.email,
        phonenumber: request.body.phonenumber,
        password: request.body.password
    });

    user.save(function(error, user) {
        request.session("success", "gh");
        request.session("success", "gh");
        request.flash("success", "회원가입 성공했습니다.");
        return response.redirect("/");
    });
});


router.get("/logout/", function(request, response) {
});


var authMiddleware = require("../middlewares/auth");

router.get("/profile/", authMiddleware.loginRequired, function(request, response) {
    return response.render("auth/profile");   
});


module.exports = router;
