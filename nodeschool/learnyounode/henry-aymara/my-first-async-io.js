const fs = require("fs");

let file_name = process.argv[2];
let number_of_lines = 0;

fs.readFile(file_name, 'utf8', function doneReading(err, fileContents) {
    number_of_lines = fileContents.split('\n').length - 1;
    console.log(number_of_lines)
});
