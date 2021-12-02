const http = require("http");
const url = process.argv[2];
let caracteres = "";

http.get(url, function(response) {
    response.on("data", (data) => {
        caracteres += data;
    });
    response.on("end", () => {
        console.log(caracteres.length);
        console.log(caracteres);
    });
});