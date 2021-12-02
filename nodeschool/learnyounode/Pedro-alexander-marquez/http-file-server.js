const http = require("http");
const fs = require("fs");
let server = http.createServer((request, response) => {
    let src = fs.createReadStream(process.argv[3]);
    src.pipe(response);
});

server.listen(process.argv[2]);