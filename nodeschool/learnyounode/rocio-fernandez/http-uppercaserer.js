const http = require('http');

const server = http.createServer((request, response) => {
    if(request.method === 'POST') {
        let body = '';
        request.setEncoding('utf-8');
        request.on('data', (data)=> {
            body += data;
        })
        request.on('end', () => {
            response.end(body.toUpperCase());
        })
    }
});

server.listen(process.argv[2]);