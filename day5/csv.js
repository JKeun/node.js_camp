// var csv = require(".csv");
// csv("csv/students.csv"); 라고 했을 때,

// csv/students.csv 를 읽어서 javascript 객체 형식으로 전달해주는 모형

// module.exports = function(filePath) {
// };

var fs = require("fs");

function readCsv(filePath) {
    var data = fs.readFileSync(filePath, {encoding:"utf8"});
    var rows = data.split("\n");
    
    var headers = rows[0].split(",");

    var result = [];

    rows.slice(1).forEach(function(row) {
        var rowData = {};
        
        // rowData["key"] = "value" ( 반복 )
        for (var headerIndex=0; headerIndex < headers.length; headerIndex++) {
            var header = headers[headerIndex];
            rowData[header] = row.split(",")[headerIndex];
        };
        result.push(rowData);
    });
    return result;
};

module.exports = readCsv;

// readCsv("./csv/lang.csv");
