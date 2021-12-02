const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    let fullUrl = new URL(request.url, 'http://example.com');
    let url = fullUrl.pathname;
    let date = new Date(fullUrl.searchParams.get('iso'));
    let data = null;
    if (url === '/api/parsetime') {
        data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }
    else if(url === '/api/unixtime') {
        data = {
            unixtime: date.getTime()
        };
    }
    response.end(JSON.stringify(data));
});

server.listen(process.argv[2]);