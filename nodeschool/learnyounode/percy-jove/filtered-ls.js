const fs=require('fs')
const path = require('path')
fs.readdir(process.argv[2],function(err,data){
    if(err) return console.log(error);
    for(let i=0;i<data.length; i++){
        if(path.extname(data[i]) === '.'+process.argv[3]){
            console.log(data[i])
        }
    }
})