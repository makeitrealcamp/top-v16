const net = require('net');

const server = net.createServer((socket) => {
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-${addZero(currentDate.getMonth() + 1)}-${addZero(currentDate.getDate())}`;
    let formattedHour = `${addZero(currentDate.getHours())}:${addZero(currentDate.getMinutes())}`;
    socket.end(`${formattedDate} ${formattedHour}\n`);
});

const addZero = (number) => {
    return (number < 10 ? '' : '0') + number;
}

server.listen(process.argv[2]);