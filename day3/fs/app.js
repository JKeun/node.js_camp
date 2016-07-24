// 1. 동기적인 방식 ( Synchronous == sync ) => readFileSync
// 2. 비동기적인 방식 ( Asynchronous == async ) => readFile

// 지금 fs 라는 폴더에 있으니
// 상위 폴더로 이동해서
// data 라는 폴더로 이동해서
// hello.txt
// => "../data/hello.txt"

// FileSystem => 파일 읽는 모듈 => fs.readFile / fs.readFileSync
// 파일 경로를 만드는 모듈 => path

var fs = require("fs");
var path = require("path");

// 1. 동기적인 방식
console.log("Start readFileSync");
var data = fs.readFileSync(
    path.join(__dirname, "../data/hello.txt"),
    {encoding: "utf8"}    
);
console.log(data);
console.log("End readFileSync");


// 2. 비동기적인 방식 (***많이쓰임***)
console.log("Start readFile");
fs.readFile(
    path.join(__dirname, "../data/hello.txt"),
    {encoding: "utf8"},
    function(error, secondData) {
        console.log(secondData);
    }  // callback function
);
// console.log(secondData); 오류남 => 실행순서를 알게해줌(콜백)
console.log("End readFile");
