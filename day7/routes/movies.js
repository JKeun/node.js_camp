var express = require("express");
var router = express.Router();

var Movie = require("../models/movie");


router.get("/", function(request, response) {
    var query = request.query.query || "";

    // movies 라는 collection 에서
    // title 에 만약 query ( "부산행" ) 포함된 모든 documents.
    // 정규표현식 => "____부산행____" => ".*부산행.*"
    // ".*" + query + ".*"

    var mongoQuery = {
        title: {
            $regex: ".*" + query + ".*"      
        }
    };  // 이름 검색.

    Movie.find(mongoQuery, function(error, movies) {
        return response.render("movies", {
            movieItems: movies
        });
    });
});

module.exports = router;
