const net = require("net");

function addCeros(fecha) {
    return (fecha < 10 ? "0" : "") + fecha;
}
const server = net.createServer((socket) => {
    let d = new Date();
    socket.end(
        addCeros(d.getFullYear()) +
        "-" +
        addCeros(d.getMonth() + 1) +
        "-" +
        addCeros(d.getDate()) +
        " " +
        addCeros(d.getHours()) +
        ":" +
        addCeros(d.getMinutes()) +
        "\n"
    );
});

server.listen(Number(process.argv[2]));