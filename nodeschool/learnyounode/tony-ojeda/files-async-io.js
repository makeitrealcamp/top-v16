const fs = require('fs')
const pth = require('path')

function processFile(err, data) {
   if (err) console.error('Error: ',err) 
    const strFilesFiltered = data.filter(item => pth.extname(item) === `.${process.argv[3]}`)
    strFilesFiltered.forEach(item => console.log(item))
}
function getFilesFiltered(path, filter) {
  fs.readdir(process.argv[2],'utf8', processFile);
}

getFilesFiltered();
