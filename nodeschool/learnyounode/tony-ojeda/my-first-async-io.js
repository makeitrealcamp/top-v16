const fs = require('fs')

function processFile(err, data) {
   if (err) console.error('Error: ',err) 
    const strList = data.split('\n');
    const numberLines = strList.length;
    console.log(numberLines - 1)
}
function getLinesNumber(path) {
    fs.readFile(path,'utf8', processFile);
}

getLinesNumber(process.argv[2]);
