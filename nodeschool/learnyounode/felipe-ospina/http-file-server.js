const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.createReadStream(process.argv[3]);
  data.pipe(res);
});
server.listen(process.argv[2]);
