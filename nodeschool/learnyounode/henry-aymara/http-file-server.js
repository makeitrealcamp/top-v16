const http = require("http");
const fs = require("fs");

const port_provided = process.argv[2];
const file_location = process.argv[3];

let buf = fs.createReadStream(file_location);
const server = http.createServer(function callback(req, res) {
    buf.pipe(res)
});
server.listen(port_provided);
