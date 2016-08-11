var path = require("path");

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


var homeRouter = require("./routes/home");
var moviesRouter = require("./routes/movies");
var contactsRouter = require("./routes/contacts")


mongoose.connect("mongodb://localhost/nodecamp");
// mongoose.connect("mongodb://mongodb.dobest.io/jkpark");
var db = mongoose.connection;

db.once("open", function() {
    console.log("Database is connected");
});

var app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", homeRouter);
app.use("/movies/", moviesRouter);
app.use("/contacts/", contactsRouter);


app.listen(3000, function() {
    console.log("Server is running");
});
