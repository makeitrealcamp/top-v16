const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function (err, data){
    let array = data.split('\n')
    console.log(array.length - 1)
})