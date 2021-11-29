const NET = require('net');
const server = NET.createServer(function (socket) {
    const fecha = new Date();
    const dia = agregarCero(fecha.getDate());
    const mes = agregarCero(fecha.getMonth() + 1);
    const anio = fecha.getFullYear();
    const minuto = agregarCero(fecha.getMinutes());
    const hora = agregarCero(fecha.getHours());
    socket.end(`${anio}-${mes}-${dia} ${hora}:${minuto}\n`);
});
server.listen(process.argv[2]);

function agregarCero(numero) {
    return (numero > 9) ? numero : '0' + numero;
}