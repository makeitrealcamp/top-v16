const fs = require("fs");

function promiseReadFile() {
    fs.readFile(process.argv[2], (err, data) => {
        let lineas = data.toString().split("\n").length - 1;
        console.log(lineas);
    });
}
promiseReadFile();