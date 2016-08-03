var fs = require("fs");
var path = require("path");

var express = require("express");
var router = express.Router();


// usersRouter
// app.use("/users/", usersRouter);

// "/users/", users:list
router.get("/", function(request, response) {
    var search = request.query.search; // GET data
    
    var data = fs.readFileSync(
        path.join(__dirname, "../db", "users.csv"),
        {encoding: "utf8"}
    );
    var rows = data.split("\n");
    var users = [];
    rows.forEach(function(row) {
        var name = row.split(",")[0];
        var email = row.split(",")[1];
        var phonenumber = row.split(",")[2];

        var user = {
            name: name,
            email: email,
            phonenumber: phonenumber
        };
        users.push(user);
    });

    if (search) {
        var matchedUserList = [];

        users.forEach(function(user) {
            if (user.name.indexOf(search) > -1) {
                matchedUserList.push(user);
            }
        });

        users = matchedUserList;
    }

    return response.render("users", {users: users, search: search});
});

router.post("/", function(request, response) {

    var name = request.body.name;
    var email = request.body.email;
    var phonenumber = request.body.phonenumber;

    var newUserRow = name + "," + email + "," + phonenumber + "\n"

    fs.appendFile(
        path.join(__dirname, "../db", "users.csv"),
        newUserRow,
        function(error) {
            return response.redirect("/users/");
        }
    );
});


module.exports = router;
