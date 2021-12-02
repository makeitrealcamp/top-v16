const http = require("http");
const map = require('through2-map')  

const port_provided = process.argv[2];

const server = http.createServer(function callback(req, res) {
     req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase(); 
     })).pipe(res)
});
server.listen(port_provided);