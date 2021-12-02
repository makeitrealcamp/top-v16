const http = require("http");
const bl = require("bl");
let resultado = [];

for (let i = 0; i < 3; i++) {
    http.get(process.argv[2 + i], function(response) {
        response.setEncoding("utf8");
        response.pipe(
            bl((error, data) => {
                if (error) return console.error(error);
                resultado[i] = data;
            })
        );
    });
}
for (let i = 0; i < 3; i++) {
    console.log(resultado[i]);
}