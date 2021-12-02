const net = require("net");
const strftime = require("strftime");

const server = net.createServer(socket => {
  data = strftime(strftime("%Y-%m-%d %H:%M", new Date()) + "\n");
  socket.write(data);
  socket.end();
});

server.listen(process.argv[2]);

// console.log(strftime("%Y-%M-%d %H:%M") + "\n");
