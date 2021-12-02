const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function (err, response) {
    if (err) {
        console.log('Error')
    }
    else {
        response.forEach(file => {
            console.log(file)
        })
    }
})