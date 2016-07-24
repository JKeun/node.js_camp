



var fs = require("fs");
var path = require("path");

fs.readFile(
    path.join(__dirname, "../data/students.csv"),  //1. 파일 주소
    {encoding: "utf8"},                            //2. 옵션

    function(error, data) {                        //3. 콜백 함수
        var students = [];  // Array ( 빈 배열; 순서가 있는 elements )
        var rows = data.split("\n");
        for (var rowIndex=0; rowIndex < rows.length-1; rowIndex++) {
            var row = rows[rowIndex];  // row => "1,박재근,jkpark@fastcampus.co.kr,01095257901"
            var columns = row.split(",");

            if (rowIndex === 0) {
                var headers = columns;  // ["id", "name", "email", "..."]
            } else {
                var student = {};  // 빈 객체 ( key => value 를 가지는 elements )
                for (var columnIndex=0; columnIndex < headers.length; columnIndex++) {
                    var column = columns[columnIndex];
                    student[headers[columnIndex]] = column;
                    // student[id] = "1" # columnIndex = 0
                    // student[nome] = "박재근" # columnIndex = 1
                }
                students.push(student);
            }    
        }
        console.log(students);
    }
);
