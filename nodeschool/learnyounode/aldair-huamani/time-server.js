const net = require('net');

function colocarCero(i) {
    return (i < 10 ? '0' : '') + i
  }

function ahora () {
    const d = new Date()
    return d.getFullYear() + '-'
      + colocarCero(d.getMonth() + 1) + '-'
      + colocarCero(d.getDate()) + ' '
      + colocarCero(d.getHours()) + ':'
      + colocarCero(d.getMinutes())
  }
const server = net.createServer(function listener(socket){
    socket.end(ahora() + '\n');
})

server.listen(Number(process.argv[2]));