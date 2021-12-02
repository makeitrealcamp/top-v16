const fs = require('fs');

let text = fs.readFileSync(process.argv[2]).toString();
let array_text = text.split('\n');
console.log(array_text.length - 1)