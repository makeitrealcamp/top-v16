const fs = require('fs');
const http = require('http');
const url = require('url');

function tiempo(iso) {
    return{
        hour: iso.getHours(),
        minute: iso.getMinutes(),
        second: iso.getSeconds()
    }
}

function unix(iso){
    return{
        unixtime: iso.getTime()
    }
}

const server = http.createServer(function(req, res){
    let urlParsed = url.parse(req.url, true);
    let resultado = '';
    if(req.method === 'GET'){
        if(urlParsed.pathname == '/api/parsetime') {
            resultado=tiempo(new Date(urlParsed.query.iso));
         }
        if(urlParsed.pathname == '/api/unixtime') {
            resultado=unix(new Date(urlParsed.query.iso)); 
        }
        
        if(resultado){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(resultado));
        } else{
            res.end();
        }
    }
})

server.listen(Number(process.argv[2]));