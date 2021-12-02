const fs = require('fs');

let file_name = process.argv[2];
let buf = fs.readFileSync(file_name);
let cadena = buf.toString();
let lines = cadena.split("\n")
if (lines.length > 0)
    console.log(lines.length - 1)
else
    console.log(0)