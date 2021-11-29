const HTTP = require('http');
const rutas = [
    { url: '/api/parsetime', method: 'GET', callback: hora },
    { url: '/api/unixtime', method: 'GET', callback: fechaUnix }
];

const server = HTTP.createServer(function (req, respo) {
    const url = new URL(req.url, 'http://' + req.headers.host);
    const obj_ruta = rutas.find((ruta) => url.pathname === ruta.url && req.method === ruta.method);
    if (!obj_ruta) return respo.end('route not found');
    obj_ruta.callback(respo, url);
});
server.listen(process.argv[2]);

function hora(response, url) {
    const date = new Date(url.searchParams.get('iso'));
    output(response, JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
}

function fechaUnix(response, url) {
    const date = new Date(url.searchParams.get('iso'));
    output(response, JSON.stringify({ unixtime: date.getTime() }));
}

function output(response, out) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(out);
}