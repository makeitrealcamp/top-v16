const http = require("http");

function parseTime(date) {
  // const date = new Date(str);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixTime(date) {
  return { unixtime: date.getTime() };
}

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, "http://example.com");
  const date = new Date(myURL.search.split("?iso=")[1]);
  res.writeHead(200, { "Content-Type": "application/json" });
  if (myURL.pathname === "/api/unixtime") {
    res.write(JSON.stringify(unixTime(date)));
  } else {
    res.write(JSON.stringify(parseTime(date)));
  }
  res.end();
});

server.listen(process.argv[2]);
