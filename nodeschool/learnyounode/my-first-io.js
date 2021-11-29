const fs = require("fs");

const buf = fs.readFileSync(process.argv[2]).toString();
const bufArr = buf.split("\n");
console.log(bufArr.length - 1);
