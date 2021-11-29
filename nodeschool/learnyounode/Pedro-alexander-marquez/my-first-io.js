const fs = require("fs");

let archivo = fs.readFileSync(process.argv[2]);
let cantidadLineas = archivo.toString().split("\n").length - 1;
console.log(cantidadLineas);