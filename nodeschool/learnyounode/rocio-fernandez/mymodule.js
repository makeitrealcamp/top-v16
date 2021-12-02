const fs = require('fs');
const path = require('path');

const getFileNames = (directoryName, extension, callback) => {
    fs.readdir(directoryName, (err, files) => {
        if(err) return callback(err);
        const filteredFiles = files.filter(x => path.extname(x) === `.${extension}`);
        callback(null, filteredFiles)
    })
}

module.exports = getFileNames;