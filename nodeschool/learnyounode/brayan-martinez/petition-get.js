
const http = require('http')
http.get(process.argv[2],(e)=>{
    e.setEncoding('utf8');
    e.on('data', console.log)
    e.on('error', console.error)
})