'use-strict'
const dir = process.argv[2];
const ext = process.argv[3];
const mymodule = require('./mymodule.js');

mymodule(dir, ext, function(err,list){
    if(err) return console.error("Error", err);

    list.forEach(element => {
        console.log(element)
    });
});
