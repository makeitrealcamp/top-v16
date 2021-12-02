const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const str = file.toString();
const lines = str.split('\n').length;
console.log(lines-1);