const fs = require('fs');
const http = require('http');
const map = require('through2-map')

const server = http.createServer(function(req, res){
    if(req.method != 'POST'){
        return res.end('se necesita POST');
    }

   
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
})

server.listen(process.argv[2]);
