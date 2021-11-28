const HTTP = require('http');
const server = HTTP.createServer(function (req, res) {
    if (req.method != 'POST') return;
    req.setEncoding('utf-8');
    req.on('data', function (chunk) {
        res.write(chunk.toUpperCase())
    });
});
server.listen(process.argv[2]);
