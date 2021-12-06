const port_provided = process.argv[2];
const net = require("net");
var strftime = require("strftime");

const server = net.createServer(function (socket) {
    // socket handling logic
    try {
        let date = strftime("%F %T", new Date());
        let rpt = "";
        rpt = date.substr(0, 16) + '\n';
        socket.end(rpt);
    } catch (error) {
        console.log(error);
    }
});
server.listen(port_provided);
