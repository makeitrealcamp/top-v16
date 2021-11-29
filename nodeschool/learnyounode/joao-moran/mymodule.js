const fs = require('fs');
const path = require('path');
module.exports = function (ruta, extension, callback) {
    fs.readdir(ruta, (error, data) => {
        if (error) return callback(error);
        data = data.filter(archivo => (path.extname(archivo) === ('.' + extension)));
        callback(null, data);
    });
}
