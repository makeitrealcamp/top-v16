const net = require('net')

function menorA (i) {
  return (i < 10 ? '0' : '') + i
}

function ahora () {
  const d = new Date()
  return d.getFullYear() + '-' +
  menorA(d.getMonth() + 1) + '-' +
  menorA(d.getDate()) + ' ' +
  menorA(d.getHours()) + ':' +
  menorA(d.getMinutes())
}

const server = net.createServer( (socket)=> {//El objeto socket contiene información sobre la conexión y es un Stream

  socket.write(ahora()+'\n')
  socket.end()//cada conexion entrante
})

server.listen(Number(process.argv[2]))