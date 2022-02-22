const fs = require('fs');

let data = fs.readFile(process.argv[2], (err, data) => {
    let lines = data.toString().split('\n').length - 1;
    console.log(lines);
});