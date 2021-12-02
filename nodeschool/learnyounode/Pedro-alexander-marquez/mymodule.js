const fs = require("fs");
const path = require("path");
module.exports = function(rutaDirectorio, extension, callback) {
    fs.readdir(rutaDirectorio, (error, lista) => {
        if (error) return callback(error, null);
        lista = lista.filter((archivo) => {
            return path.extname(archivo) === "." + extension;
        });
        callback(null, lista);
    });
};