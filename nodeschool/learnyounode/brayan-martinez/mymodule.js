const fs = require('fs')//archivos
const path = require('path')//filtrar

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir,(err, list)=> {
        if (err) {
            return callback(err)
        }

        list = list.filter((e) =>{
            return path.extname(e) === '.' + filterStr
        })

        callback(null, list)

    })
}