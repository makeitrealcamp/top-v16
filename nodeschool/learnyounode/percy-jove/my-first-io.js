const fs = require('fs')
const buf = fs.readFileSync(process.argv[2]).toString();
console.log(buf.split('\n').length-1);