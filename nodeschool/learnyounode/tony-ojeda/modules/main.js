const processFile = require('./module')

function result (err, data) {
    if (err) return console.log('Error: ', err)
    console.log(data)
}
console.log(processFile(process.argv[2], process.argv[3], result))


