const fs = require('fs')
const path = require('path');

fs.readdir(process.argv[2], function (err, files){
    files.forEach(file => {
        if (path.extname(file) == ".md")
            console.log(file);
      })
})