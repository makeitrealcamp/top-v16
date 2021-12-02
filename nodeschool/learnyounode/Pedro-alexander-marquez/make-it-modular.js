let mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], (error, lista) => {
    if (error) return console.log(error);
    lista.map((archivo) => console.log(archivo));
});