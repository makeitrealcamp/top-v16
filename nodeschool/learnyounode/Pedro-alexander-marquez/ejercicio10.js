let net = require("net");

function ceros(i) {
    return (i < 10 ? "0" : "") + i;
}

function fecha() {
    let d = new Date();
    return (
        d.getFullYear() +
        "-" +
        ceros(d.getMonth() + 1) +
        "-" +
        ceros(d.getDate()) +
        " " +
        ceros(d.getHours()) +
        ":" +
        ceros(d.getMinutes())
    );
}

let server = net.createServer(function(socket) {
    socket.end(fecha() + "\n");
});

server.listen(Number(process.argv[2]));