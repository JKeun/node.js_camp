fs = require("fs");
path = require("path");

fs.readFile(
    path.join(__dirname, "../data/students.csv"),
    {encoding: "utf8"},

    function(error, data) {
        var students = [];
        var rows = data.split("\n");
        for (var rowIndex=0; rowIndex < rows.length-1; rowIndex++) {
            var row = rows[rowIndex];
            var columns = row.split(",");

            if (rowIndex === 0) {
                var headers = columns;
            } else {
                var student = {};
                for (var columnIndex=0; columnIndex < headers.length; columnIndex++) {
                    var column = columns[columnIndex];
                    student[headers[columnIndex]] = column;
                }
                students.push(student);
            }
        }
    console.log(students);
    }
);
