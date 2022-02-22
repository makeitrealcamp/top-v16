const fs = require('fs');

console.log(process.argv);
let data = fs.readFileSync(process.argv[2]).toString();
let lines = data.split('\n').length - 1;
console.log(lines);