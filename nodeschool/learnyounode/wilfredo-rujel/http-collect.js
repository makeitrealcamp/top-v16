const http = require('http')
const bl = require('bl')

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8')
    let rawData = []
    response.pipe(bl(function (err, data) {
        rawData += data
    }))
    response.on('end', () =>  {
        try {
            console.log(rawData.length)
            console.log(rawData);
        } catch (e) {
            console.error(e.message);
        }
    })
    response.on('error', console.error)
}).on('error', console.error)