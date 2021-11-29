const http = require('http')
const throug = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('envíame un POST\n')
  }

  req.pipe(throug(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))