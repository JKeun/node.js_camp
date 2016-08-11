// 1. MongoDB 에 다시 접속
// 2. 기존에 만들어진 Movie 모델을 가지고 와서
// 3. Movie 객체를 만든 다음에
// 4. 실제 데이터베이스에 저장

var mongoose = require("mongoose");
var Movie = require("./models/movie");

var request = require("request");


mongoose.connect("mongodb://localhost/nodecamp");
var db = mongoose.connection;


db.once("open", function() {
    console.log("Database is connected");

    request.get("https://watcha.net/home/news.json?page=1&per=300", function(error, response, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;
        var movieItems = [];

        newsItems.forEach(function(newsItem) {
            var movieItem = {
                title: newsItem.title,
                content: newsItem.content,
                image: newsItem.image
            };

            movieItems.push(movieItem);
        });

        Movie.collection.insert(movieItems, function(error, movies) {
            if (error) throw error;
            console.log("Successfully added");
            
            db.close(function() {
                console.log("Database is disconnected");
            });    
        });
    });
});
