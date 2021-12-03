const http = require("http");

const port_provided = process.argv[2];

const server = http.createServer(function callback(req, res) {
    const url_from_req = new URL(req.url, "https://example.org");
    if (url_from_req.pathname === "/api/parsetime") {
        const date = new Date(url_from_req.search.split("=")[1]);
        res.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
        res.end();
    }
    if (url_from_req.pathname === "/api/unixtime") {
        const date = new Date(url_from_req.search.split("=")[1]);
        res.write(JSON.stringify({
            unixtime: date.getTime()
        }));
        res.end();
    }
    res.end();
});
server.listen(port_provided);
