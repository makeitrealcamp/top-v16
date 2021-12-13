const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(folder, (err, files) => {
    files.map(x => {
        if (path.extname(x) === extension)
            console.log(x)
    });
})