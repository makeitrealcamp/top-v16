const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (error, lista) => {
    for (const iterator of lista) {
        if (path.extname(iterator) == ('.' + process.argv[3]))
            console.log(iterator)
    }
})