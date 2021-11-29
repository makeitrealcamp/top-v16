const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, files){
        if (err) {
            return callback(err)
        }
        else {
            let response = []
            files.forEach(file => {
                if (path.extname(file) == '.' + ext)
                    response.push(file.toString())
            })
            callback(null, response)
        }   
    })
}
    