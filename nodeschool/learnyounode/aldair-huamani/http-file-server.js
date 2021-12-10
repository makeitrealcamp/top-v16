const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res){
    let stream =fs.createReadStream(process.argv[3]).pipe(res);
})

server.listen(process.argv[2]);