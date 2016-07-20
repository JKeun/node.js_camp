// 1. 동기적인 방식 ( Synchronous == sync )
// 2. 비동기적인 방식 ( Asynchronous == async )

// 지금 fs 라는 폴더에 있으니
// 상위 폴더로 이동해서
// data 라는 폴더로 이동해서
// hello.txt
// => "../data/hello.txt"

// FileSystem => 파일 읽는 모듈 => fs.readFile / fs.readFileSync
// 파일 경로를 만드는 모듈 => path

var path = require("path");
var fs = require("fs");

var data = fs.readFileSync(
    path.join(__dirname, "../data/hello.txt"),
    {encoding: "utf8"}
);
console.log(data);

