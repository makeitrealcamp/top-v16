const fs = require('fs')
const pth = require('path')

let path;
let ext;
let result;

function processFile(err, data) {
   if (err) return this.result = err ;
    this.result = data.filter(item => pth.extname(item) === `.${this.ext}`)
    
}

module.exports =  function (path, ext, callback) {
    this.path = path;
    this.ext = ext;
    fs.readdir(this.path,'utf8', processFile);
    console.log( this.result )
    return this.result;
}
