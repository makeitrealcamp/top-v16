const fs = require("fs");
const path = require("path");
const extname = `.${process.argv[3]}`;
fs.readdir(process.argv[2], (error, lista) => {
    if (error) return console.error(error);
    lista.map((archivo) => {
        if (path.extname(archivo) === extname) {
            console.log(archivo);
        }
    });
});