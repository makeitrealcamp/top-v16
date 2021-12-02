const HTTP = require('http');
const FS = require('fs');
const server = HTTP.createServer(function (req, res) {
    const stream = FS.createReadStream(process.argv[3]);
    stream.pipe(res);
});

server.listen(process.argv[2]);