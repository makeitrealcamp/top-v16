const fs = require("fs");
try {
    fs.readFile(process.argv[2], "utf8", (error, data) => {
        if (error !== null) {
            console.error(error);
            return;
        }
        let cantidadLineas = data.split("\n").length - 1;
        console.log(cantidadLineas);
    });
} catch (e) {
    console.error("error con la ruta del archivo");
}