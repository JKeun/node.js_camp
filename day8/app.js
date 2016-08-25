var path = require("path");

var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("connect-flash");
var messages = require("express-messages");


var homeRouter = require("./routes/home");
var authRouter = require("./routes/auth");
var flashRouter = require("./routes/flash");


mongoose.connect("mongodb://localhost/nodecamp");
var db = mongoose.connection;

db.once("open", function() {
    console.log("Database is connected");
});


var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(session({
    secret: "Node.js",
    resave: true,
    saveUninitialized: true
}));


app.use(flash());
// app.use(require("connect-flash")());

app.use(function(request, response, next) {
    response.locals.messages = messages(request, response);
    next();
});


app.use(
    express.static(path.join(__dirname, "public"))
);
// staticfiles serving
// "url../static/"css/application.css" => "public/css/application.css"


app.use(morgan("combined"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(function(request, response, next) {
    response.locals.user = request.session.user;
    next();
});


app.use("/", homeRouter); // => "/"
app.use("/", authRouter); // => "/login/", "/signup/"
app.use("/flash/", flashRouter);


// 1. error handling middleware
// 2. login required middleware


app.use(function(error, request, response, next) {
    // if (error) return next(error);
    
    response.status(error.status || 500);
    return response.render("error", {error: error});
});


app.listen(3000, function() {
    console.log("Server is running");
});
