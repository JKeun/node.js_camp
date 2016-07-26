// Log 를 남기는 모듈


module.exports = function(request) {
    console.log("Reqeuested on: " + request.url);
};
