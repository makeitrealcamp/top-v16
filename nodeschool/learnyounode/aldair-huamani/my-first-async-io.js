const fs = require('fs');
let lines=0;
function read(){
    const file=fs.readFile(process.argv[2],'utf8', callback);
}
function callback(err,data){
    lines = data.toString().split('\n').length-1;

    console.log(lines);
}

read();